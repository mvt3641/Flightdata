// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

require("./flightdata.js")(app);

app.get('/',function(req,res){
  res.json(WindArr);
  console.log(WindArr);
  res.sendFile(path.join(__dirname,"index.html"));
});

// Syncing our sequelize models and then starting our express app
  app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });
