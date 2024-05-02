const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
app.use(cookieParser());
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  //   res.cookie("name", "armanahadcookies"); //create cookies
  res.send("done and pasword correct");
});

// app.get("/read", (req, res) => {
//   console.log(req.cookies);
//   res.send("readpage");
// });

const saltsRound = 10;
const mypAssword = "armanahad123";

// paswoord encryption
app.get("/pwd-encrypt ", (req, res) => {
  bcrypt.genSalt(saltsRound, (err, salt) => {
    bcrypt.hash(mypAssword, salt, (err, hash) => {
      res.send(hash);
    });
  });
});

app.get("/pwd-encrypt/pwd-decrypt", (req, res) => {
  bcrypt.compare(
    mypAssword,
    "$2b$10$fKDfGXH7CsjylogW/rQucOtH2mnyzfmYy2wWZVNT3qFdPNhX.2IQW",
    function (err, result) {
      res.redirect("/");
    }
  );
});

// /jwt jsonwebtoken
app.get("/jwt", (req, res) => {
  let token = jwt.sign({ email: "armanahad123@gmail.com" }, "secret");
  console.log("token", token);
  res.cookie("token", token);
});
// app.get("/jwt/getdata", (req, res) => {
//   let data = jwt.verify(req.cookies.token, "secrete");
//   console.log(data);
// });

app.listen(3000);
