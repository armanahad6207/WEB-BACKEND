const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/profile/:username/:age", (req, res) => {
  res.send(`welcome,${req.params.username} and your age is ${req.params.age}`);
});

app.listen(3000, () => {
  console.log("its running");
});
