var express = require("express");
var path = require("path");
var apiRoute = require('./apiRoutes.js');
var app = express();


exports.home = app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public", "home.html"));
});

exports.survey = app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public", "survey.html"));
});
