var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");

const token = uid2(32);

// ROUTE USER

//! Création de la route SIGN UP avec le module CheckBody USER/SIGNUP
router.post("/signup", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["firstname", "username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
  }
  // Si utilisateurs non enregistré alors enregistrement
  User.findOne({ username: req.body.username }).then((data) => {
    if (data === null) {
      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: req.body.password,
        token: token,
      });
      newUser.save().then(() => {
        res.json({ result: true, user: newUser });
      });
    } else {
      // Utilisateur déja existant
      res.json({ result: false, error: "User already exists" });
    }
  });
});

//! Création de la route Sign In ( connexion ) USER/SIGNIN
router.post("/signin", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  // Verification des datas
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  }).then((data) => {
    // Si la DataBase valide alors il peut se connecter
    if (data) {
      res.json({ result: true, connect: "connected" });
      // Sinon utilisateur introuvable
    } else {
      res.json({ result: false, error: "User not found" });
    }
  });
});

// //! Création du sous document Tweet  USER/TWEET
// router.post("/tweet", (req, res) => {
//   if (!checkBody(req.body, ["text"])) {
//     res.json({ result: false, error: "Missing or empty fields" });
//   } else {
//     const newTweet = {
//       text: req.body.text,
//     };
//     newTweet.save().then(() => {
//       res.json({ result: true, tweet: newTweet });
//     });
//   }
// });

module.exports = router;
