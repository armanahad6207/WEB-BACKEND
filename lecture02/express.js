// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

const express = require("express");
app = express();
app.get("/", function (rep, res) {
  res.send("this is arman");
});
app.get("/profile", (req, res) => {
  res.send("my profile");
});

app.listen(3000);
