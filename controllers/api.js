//requiring express for routing and server services
var express = require('express');
var mongoose = require('mongoose');
var flight = require('../models/flightmodel');
var StatusRec = require("../models/statusmodel");
//requring the mongodb database connection
var db = require('../config/connection');

mongoose.Promise = Promise;
//creating a router for export to handle middleware and routing
var router = express.Router();

//Save record to db
router.post('/statusdata', function(req, res) {
  var url = "mongodb://localhost:27017/DailySitrep"
  var data = req.body;
  var DailyStatus = new StatusRec(data);
   mongoose.connect(url, (err, db) => {
   if (err) throw err;
   DailyStatus.save(function(err,StatusRec){
     if (err) throw err;
     console.log(StatusRec);
   })
// Return object to client
    res.json(data);
  });
});
    //Since this in an uploaded file, sort by _id of upload
    // flight.find(searchmon).sort({
    //   "_id": 1
    // }).exec(function(err, results) {
    //   if (err) throw err;
    //   res.json(results)
    //   console.log(`${results.length}  files returned on query`)
    //
    // });




//Api test route//
//Getting all records
router.get('/allflightdata', function(req, res) {
  var uri = "mongodb://localhost:27017/flightdataSPARC"
  mongoose.connect(uri, function(error) {
    var alldata = req.body;
    console.log(alldata);

    //Since this in an uploaded file, sort by _id of upload
    flight.find().sort({
      "_id": 1
    }).exec(function(err, results) {
      if (err) throw err;
      console.log(results);
      res.json(results);
      console.log(`${results.length}  files returned on query`)

    });

  })
});


// Route for getting date and time from table
router.get('/api/flightdata/data', function(req, res) {
  // db.query('SELECT Date, TIME FROM asitrep;',function(err,results){
  //   if(err) throw err;
  //   res.json(results);
  // })
});


// Route to grab data from client-side and add to mysql table.
router.post('/api/flightdata', function(req, res) {
  // db.query('INSERT INTO asitrep SET ?;', req.body,function(err,results){
  //   if(err) throw err;
  //   //// insert here command to add to Chart
  //   ////
  // })
  //   db.query('SELECT * FROM aisitrep;', function(req,res){
  //     res.json(res)
  //   })
});




module.exports = router;
