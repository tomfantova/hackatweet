var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const Tweet = require("../models/tweets");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const token = uid2(32);
const bcrypt = require("bcrypt");

// ROUTE USER

// USER/SIGNUP
//! Création de la route SIGN UP avec le module CheckBody USER/SIGNUP
router.post("/signup", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["firstname", "username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
  }
  // Si utilisateurs non enregistré alors enregistrement
  User.findOne({ username: req.body.username }).then((data) => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash,
        token: token,
      });
      newUser.save().then((newDoc) => {
        res.json({
          result: true,
          token: newDoc.token,
          firstname: newDoc.firstname,
        });
      });
    } else {
      // Utilisateur déja existant
      res.json({ result: false, error: "User already exists" });
    }
  });
});

//USER/SIGNUP
//! Création de la route Sign In ( connexion ) USER/SIGNIN
router.post("/signin", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  // Verification des datas
  User.findOne({ username: req.body.username }).then((data) => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({
        result: true,
        token: data.token,
        firstname: data.firstname,
      });
    } else {
      res.json({ result: false, error: "User not found or wrong password" });
    }
  });
});

//! Enregistrement tweet
router.post("/tweet", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["tweet"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  const newTweet = new Tweet({
    username: req.body.username,
    firstname: req.body.firstname,
    token: req.body.token,
    tweet: req.body.tweet,
  });
  newTweet.save().then((newDoc) => {
    res.json({ result: true, tweet: newDoc });
  });
});

//! Affichage tweets
router.get("/tweets", (req, res) => {
  Tweet.find().then((data) => {
    if (data) {
      res.json({ result: true, content: data });
    } else {
      res.json({ result: false, error: "No tweets" });
    }
  });
});

// //! Création du sous document Tweet  USER/TWEET
// router.post("/tweet", async (req, res) => {
//   if (!checkBody(req.body, ["tweet"])) {
//     res.json({ result: false, error: "Missing or empty fields" });
//   } else {
//     const tweet = req.body.tweet;
//     const userTweet = await User.findOne({ token: req.body.token });
//     userTweet.tweets.push(tweet);
//     await userTweet.save();
//     res.json({ result: true, tweet: tweet });
//   }
// });

// //! Affichage du sous document Tweet  USER/TWEET
// router.get("/tweets/:token", (req, res) => {
//   User.findOne({ token: req.params.token }).then((data) => {
//     if (data) {
//       res.json({ result: true, content: data });
//     } else {
//       res.json({ result: false, error: "User not found" });
//     }
//   });
// });

module.exports = router;
