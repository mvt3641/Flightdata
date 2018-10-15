//requiring express for routing and server services
var express = require('express');
var mongoose = require('mongoose');
var flight = require('../models/flightmodel');
//requring the mongodb database connection
var connection = require('../config/connection');

mongoose.Promise = Promise;
//creating a router for export to handle middleware and routing
var router = express.Router();

//get all data from the db table
router.post('/flightdata', function(req, res) {
  // var uri = "mongodb://localhost:27017/flightdata"
  var uri = "mongodb://flighttest:coding41@ds231723.mlab.com:31723/flightdata_testdb";
  mongoose.connect(uri, function(error) {
    var searchmon = req.body;
    // var searchdat = req.body.day_srch;
    console.log(searchmon);
    // console.log(searchdat);

    //Since this in an uploaded file, sort by _id of upload
    flight.find(searchmon).sort({
      "_id": 1
    }).exec(function(err, results) {
      if (err) throw err;
      res.json(results)
      console.log(`${results.length}  files returned on query`)

    });

  })
});

//Api test route//
//Route for getting ground winds
router.get('/api/flightdata/chart', function(req, res) {
  // db.query('SELECT GROUND_,TIME,Date,Winds_Aloft,TENSION FROM asitrep;',function(err,results){
  //   if(err) throw err;
  //   res.json(results);
  // })
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
