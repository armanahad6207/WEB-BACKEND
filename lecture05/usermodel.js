const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongopractice");

const userschema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

// create model of user
module.exports = mongoose.model("user", userschema);
