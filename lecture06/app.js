const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");
const { read } = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/read", async (req, res) => {
  let user = await userModel.find();

  res.render("read", { users: user });
});

// create user
app.post("/create", async (req, res) => {
  let { name, email, image } = req.body;
  let createuser = await userModel.create({
    name,
    email,
    image,
  });

  res.redirect("/read");
});
app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

// edit feature

app.get("/edit/:_id", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params._id });
  res.render("edit", { user });
});
app.post("/update/:_id", async (req, res) => {
  let { image, name, email } = req.body;
  await userModel.findOneAndUpdate(
    { _id: req.params._id },
    { image, name, email },
    { new: true }
  );
  res.redirect("/read");
});

app.listen(3000);
