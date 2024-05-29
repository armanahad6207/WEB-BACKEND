const express = require("express");
const app = express();
const db = require("./db");

app.get("/run", (req, res) => {
  res.send("hello!!!!!!!!!!!!!!!!!!!");
});

app.listen(4000, () => {
  console.log("server started successfully");
});
