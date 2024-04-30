const express = require("express");
const app = express();
const usermodel = require("./usermodel");

app.get("/", function (req, res) {
  res.send("hello");
});

//create
app.get("/create", async (req, res) => {
  let createuser = await usermodel.create({
    name: "arman",
    username: "arman123",
    email: "arman@gmail.com",
  });
  res.send(createuser);
});
//  update
app.get("/update", async (req, res) => {
  let updatename = await usermodel.findOneAndUpdate(
    { username: "arman123" },
    { name: "armanahda" },
    { new: true }
  );
  res.send(updatename);
});

// read
app.get("/read", async (req, res) => {
  let users = await usermodel.find(); // pass as a argument {username:" arman123"} for specefic user name
  res.send(users);
});

// delete
app.get("/delete", async (req, res) => {
  let userdelete = await usermodel.findOneAndDelete({ username: "arman" });
  res.send(userdelete);
});
app.listen(3000);
