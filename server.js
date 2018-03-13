// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require('./controllers/api');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(apiRoutes);

app.use('/', express.static(path.join(__dirname, 'public')));



// Syncing our sequelize models and then starting our express app
  app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });
