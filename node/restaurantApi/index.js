const express = require("express"); //third party package
let app = express();
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
let PORT = 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017";
let db;

app.get("/", (req, res) => {
  res.send(" weilcome to my own server");
});

//get the locations data

app.get("/location", (req, res) => {
  db.collection("locations")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//get the mealtype data

app.get("/mealtype", (req, res) => {
  db.collection("mealType")
    .find()
    .toArray((err, result) => {
      res.send(result);
    });
});

//get the restaurant data through stateid amd mealid
app.get("/restaurant", (req, res) => {
  let query = {};
  let stateId = Number(req.query.state_id);
  let mealId = Number(req.query.mealId);
  if (stateId) {
    query = { state_id: stateId };
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
  }

  db.collection("restaurants")
    .find(query)
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
app.get("/filter", (req, res) => {
  db.collection("restaurants")
    .find()
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});

//mongodb connection
MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("mongodb is connected");
  if (err) console.log("error while connecting");
  db = client.db("Zomato-Application");
  app.listen(PORT, () => {
    console.log("Server started successfully");
  });
});
