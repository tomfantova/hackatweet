var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

//! Création de la route SIGN UP avec le module CheckBody
router.post("/signup", (req, res) => {
  // verification des inputs bien rempli
  if (
    !checkBody(req.body, ["firstname", "localisation", "username", "password"])
  ) {
    res.json({ result: false, error: "Missing or empty fields" });
  }
  // Si utilisateurs non enregistré alors enregistrement
  User.findOne({ username: req.body.username }).then((data) => {
    if (data === null) {
      const newUser = new User({
        firstname: req.body.firstname,
        localisation: req.body.localisation,
        username: req.body.username,
        password: req.body.password,
      });
      newUser.save().then(() => {
        res.json({ result: true, info: newUser });
      });
    } else {
      // Utilisateur déja existant
      res.json({ result: false, error: "User already exists" });
    }
  });
});

// Création de la route Sign In ( connexion )
router.post("/signin", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }
  //! Compare les infos entré dans la base de donnée
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  }).then((data) => {
    // Si la DataBase valide alors il peut se connecter
    if (data) {
      res.json({ result: true, info: "connected" });
      // Sinon utilisateur introuvable
    } else {
      res.json({ result: false, error: "User not found" });
    }
  });
});

module.exports = router;
