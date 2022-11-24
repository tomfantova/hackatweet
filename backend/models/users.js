const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: String,
  localisation: String,
  username: String,
  password: String,
  connected: Boolean,
  token: String,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
