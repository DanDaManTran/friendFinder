const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const data = require('../data/friends.js');

exports.route = app.get("/api/friends", function(req, res) {
  res.json(data.friends);
});

exports.posting = app.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  data.friends.push(newFriend);

  res.json(data.friends);
});
