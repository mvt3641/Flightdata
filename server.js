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
var logger = require("morgan");
var fileUpload =require('express-fileUpload');


// Sets up the Express App
// =============================================================
var app = express();

// Initailize file upload
app.use(fileUpload());

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(logger("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(apiRoutes);

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/upload',function(req, res){
  res.sendFile(path.join(__dirname, "/public/uploadpage.html"));
});
var template = require('./db/template.js');
app.get('/template', template.get);
// upload template to mongodb
var upload = require('./db/upload.js');
app.post('/upload', upload.post);

// Syncing our sequelize models and then starting our express app
  app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });
