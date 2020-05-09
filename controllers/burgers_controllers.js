// File to set up routes for the app.
// Also contains MySQL queries

// Require dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// GET REQUEST grab data from all the burgers from the burgers table.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerBurger = { burgers: data };
    res.render("index", burgerBurger);
  });
});

// POST REQUEST - inserting a burger into the db through user input
router.post("/insertburger", function (req, res) {
  burger.insertOne(req.body.burger_name, function (addon) {
    res.redirect("/");
  });
});

// POST REQUEST - updating if a burger has been devoured or not
router.post("/update/:id", function (req, res) {
  var condition = `id = ${req.params.id}`;
  burger.updateOne({ devoured: req.body.devoured }, condition, function () {
    res.redirect("/");
  });
});

module.exports = router;
