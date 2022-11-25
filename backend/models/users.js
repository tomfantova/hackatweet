const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  tweet: String,
});

const userSchema = mongoose.Schema({
  firstname: String,
  username: String,
  password: String,
  token: String,
<<<<<<< HEAD
  text: tweetSchema,
=======
  tweets: [tweetSchema],
>>>>>>> 1b92f90ac97553c9216503a248aa1d7256d0992e
});

const User = mongoose.model("users", userSchema);

module.exports = User;
