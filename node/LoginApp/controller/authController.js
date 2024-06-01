const express = require("express");
const router = express.Router();
const user = require("../model/userModel");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const secert = require("../config");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//signup route
router.post("/register", (req, res) => {
  let hashPassword = bcrypt.hashSync(req.body.password, 8);
  console.log(hashPassword);

  user.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      phone: req.body.phone,
      role: req.body.role ? req.body.role : "user",
    },
    (err, data) => {
      if (err)
        return res.send("Something wrong with Registration" + err.message);
      res.send("registration successfully");
    }
  );
});

//login route

router.post("/login", (req, res) => {
  user.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.send({ auth: false, token: "error while logging" });
    if (!user) return res.send({ auth: false, token: "invalid ceredentials" });
    else {
      const passIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passIsValid)
        return res.send({ auth: false, token: "invalid ceredentials" });
      let token = jwt.sign({ id: user._id }, secert.secert, {
        expiresIn: 86400,
      });
      res.send({ auth: true, token: token });
    }
  });
});

module.exports = router;
