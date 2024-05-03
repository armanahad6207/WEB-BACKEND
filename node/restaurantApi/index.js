const express = require("express"); //third party package
let app = express();
const users = [
  {
    name: "arman",
    age: 22,
  },
  {
    name: "anil",
    age: 23,
  },
  {
    name: "ADI",
    age: 21,
  },
  {
    name: "akash",
    age: 24,
  },
];

app.get("/", (req, res) => {
  res.send(" weilcome to my own server");
});

app.get("/userList", (req, res) => {
  res.send(users);
});
app.listen(3000);
