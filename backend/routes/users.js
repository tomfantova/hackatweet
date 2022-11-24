var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const token = uid2(32);
const bcrypt = require("bcrypt");

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
      const hash = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash,
        token: token,
      });
      newUser.save().then((newDoc) => {
        res.json({ result: true, token: newDoc.token });
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
  User.findOne({ username: req.body.username }).then((data) => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: "User not found or wrong password" });
    }
  });
});

//! Création du sous document Tweet  USER/TWEET
router.post("/tweet", (req, res) => {
  if (!checkBody(req.body, ["tweet"])) {
    res.json({ result: false, error: "Missing or empty fields" });
  } else {
    const tweet = req.body.tweet;
    User.updateOne({ token: req.body.token }, [tweets.push(tweet)]).then();
  }
});

module.exports = router;
