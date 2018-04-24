//requiring express for routing and server services
var express = require('express');
var mongoose = require('mongoose');
var flight = require('../models/flightmodel');
var siteinfo = require('../models/sitemodel');
//requring the mongodb database connection
var db = require('../config/connection');
mongoose.Promise = Promise;
//creating a router for export to handle middleware and routing
var router = express.Router();

//get all data from the mysql table
router.post('/flightdata', function(req, res) {
  var searchmon = req.body
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



/////////////////////// PAX TRACKER /////////////////////////////////////////////////////////

router.post('/api/pax', function(req, res) {
  db.query('INSERT INTO paxtracker SET ?', req.body, function(err, results) {
    if (err) throw err;
    console.log(req.body);
    //response to client side
    db.query('SELECT * FROM paxtracker', function(err, results) {
      if (err) throw err;
      res.json(results);
    })
  })
});


////show the whole roster////
router.get('/api/pax', function(req, res) {
  db.query('SELECT * FROM paxtracker', function(err, results) {
    if (err) throw err;
    res.json(results);
  })
})

/////////SITE ROUTE//////////////////

router.post('/api/site',(req, res) => {
  // db.query('INSERT INTO location SET ?', req.body, function(err,results){
  //     if(err) throw err;
  // console.log(req.body.sitename);
  var newsite = new siteinfo(req.body);
  var Newlocationdb = req.body.sitename.toLowerCase().replace(/\s/g, '');
  console.log(newsite);
  //Created new DB in mongo for Site
  var url = "mongodb://localhost:27017/" + Newlocationdb;

  var dbase =  mongoose.connect(url,(err, db) => {
    if (err) throw err;
    console.log("Database created for " + Newlocationdb + "!");


    //Created first collection for Site called Site Info.
    db.createCollection("Siteinfo" ,(err,res) => {
      if(err) throw err;
      console.log("collection created");
      db.close();
    })
    // dbase.siteinfo.insert({"sitename":req.body.sitename});
  });

  newsite.update()
 .then(item => {
 res.send("item saved to database");
 console.log("items save to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });


  // }).then(err =>{
  //   if (err) throw err;
  //   console.log("test");
  //   res.json("updated");
  // })

    })

    //   db.siteinfo.insert({req.body}, function(){
    //     console.log("Site Information added to: "+Newlocationdb);
    //   res.json("database created");
    //
    // })


    // .then(item => {
    //   newsite.save()
    //     res.send("item saved to database");
    //     })
    //     .catch(err => {
    //       res.status(400).send("unable to save to database");
    // })




  //response to client side
  // db.query('SELECT * FROM location', function(err, results) {
  //           if (err) throw err;
  //           res.json(results);
  // })
  // })
// });



router.get('/api/site', function(req, res) {
  // db.query('SELECT * FROM location', function(err, results) {
  //   if (err) throw err;
  //   res.json(results);
  // })
});



module.exports = router;
