const express = require("express");
const path = require("path");
const apiRoute = require('./apiRoutes.js');
const app = express();

//using the url/ to post the home.html
exports.home = app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public", "home.html"));
});

//using the url/survey to post survey.html
exports.survey = app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname + "/../public", "survey.html"));
});
