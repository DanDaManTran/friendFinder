const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var route = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use("/", route.home);
app.use("/survey", route.survey);
app.use("/api", apiRoutes.route),

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
