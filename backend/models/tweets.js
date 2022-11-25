const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  firstname: String,
  username: String,
  tweet: String,
  token: String,
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
