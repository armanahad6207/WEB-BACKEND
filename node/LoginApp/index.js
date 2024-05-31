const express = require("express");
const app = express();
const db = require("./db");

const authController = require("./controller/authController");

app.use("/auth", authController);

app.listen(4000, () => {
  console.log("server started successfully");
});
