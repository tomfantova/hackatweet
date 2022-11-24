var express = require("express");
var router = express.Router();

require("../models/connection");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

// Création de la route SIGN UP avec le module CheckBody
router.post("/signup", (req, res) => {
  // verification des inputs bien rempli
  if (!checkBody(req.body, ["firstname", "username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
  }
  // Check if user has not already been registered
  User.findOne({ username: req.body.username }).then((data) => {
    if (data === null) {
      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: req.body.password,
      });
      newUser.save().then(() => {
        res.json({ result: true, info: newUser });
      });
    } else {
      // User already exists in DataBase
      res.json({ result: false, error: "User already exists" });
    }
  });
});

module.exports = router;
