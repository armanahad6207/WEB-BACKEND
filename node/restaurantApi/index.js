const express = require("express"); //third party package
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
let app = express();
const url = "mongodb://127.0.0.1:27017";
let db;

app.get("/", (req, res) => {
  res.send(" weilcome to my own server");
});

app.get("/location", async (req, res) => {
  try {
    const locations = await db.collection("location").find().toArray();
    res.send(locations);
  } catch (err) {
    console.error("Failed to fetch locations:", err);
    res.status(500).send("Failed to fetch locations");
  }
});

MongoClient.connect(url, (err, client) => {
  console.log("connected success fully");
  if (err) console.log("something wrong");
  db = client.db("Zomato-Application");
  app.listen(3000, () => {
    console.log("server started on the port 3000");
  });
});
