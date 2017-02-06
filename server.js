//required npm to get this app to work
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//require internal files
const route = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

//setting up the local host
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//setting up different url according to the imported files
app.use("/", route.home);
app.use("/", route.survey);
app.use("/", apiRoutes.route);
app.use("/", apiRoutes.posting),
app.use(express.static(path.join(__dirname, "app")));

//listenon the the PORT to see if anything is happening there
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
