// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

const express = require("express");
app = express();

//  middleware => whe use hit any request to server,
// server accept it and then befor any routing which user
//  provide there is middleware that we can put.
// we can put middleware more than one

app.use((req, res, next) => {
  console.log("its middleware");
  next();
});
app.get("/", function (rep, res) {
  res.send("this is arman");
});
app.get("/profile", (req, res) => {
  res.send("my profile");
});

// erro handling

app.get("/module", (req, res, next) => {
  return next(new Error("something wrong"));
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
