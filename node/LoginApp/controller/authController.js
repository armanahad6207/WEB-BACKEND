const express = require("express");
const router = express.Router();
const user = require("../model/userModel");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

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

module.exports = router;
