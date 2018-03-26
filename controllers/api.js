//requiring express for routing and server services
var express = require('express');

//requring the mysql database connection
var db = require('../config/connection');

//creating a router for export to handle middleware and routing
var router = express.Router();

//get all data from the mysql table
router.get('/api/flightdata',function(req,res){
  db.query('SELECT * FROM asitrep;',function(err,results){
    if(err) throw err;
    res.json(results);
  })
});

//Api test route//
//Route for getting ground winds
router.get('/api/flightdata/chart', function(req,res){
  db.query('SELECT GROUND_,TIME,Date,Winds_Aloft,TENSION FROM asitrep;',function(err,results){
    if(err) throw err;
    res.json(results);
  })
});


// Route for getting date and time from table
router.get('/api/flightdata/data', function(req,res){
  db.query('SELECT Date, TIME FROM asitrep;',function(err,results){
    if(err) throw err;
    res.json(results);
  })
});


// Route to grab data from client-side and add to mysql table.
router.post('/api/flightdata',function(req,res){
  db.query('INSERT INTO asitrep SET ?;', req.body,function(err,results){
    if(err) throw err;
    //// insert here command to add to Chart
    ////
  })
    db.query('SELECT * FROM aisitrep;', function(req,res){
      res.json(res)
    })
 });



/////////////////////// PAX TRACKER /////////////////////////////////////////////////////////

router.post('/api/pax', function(req,res){
  db.query('INSERT INTO paxtracker SET ?', req.body, function(err,results){
    if(err) throw err;
    console.log(req.body);
  //response to client side
  db.query('SELECT * FROM paxtracker', function(err, results) {
            if (err) throw err;
            res.json(results);
  })
})
});


////show the whole roster////
router.get('/api/pax',function(req,res){
  db.query('SELECT * FROM paxtracker', function(err, results) {
            if (err) throw err;
            res.json(results);
  })
})

/////////SITE ROUTE//////////////////

router.post('/api/site',function(req,res){
db.query('INSERT INTO location SET ?', req.body, function(err,results){
    if(err) throw err;
    console.log(req.body);
    //response to client side
    db.query('SELECT * FROM location', function(err, results) {
              if (err) throw err;
              res.json(results);
    })
})
});


router.get('/api/site', function(req,res){
  db.query('SELECT * FROM location', function(err,results){
    if(err) throw err;
    res.json(results);
  })
});



module.exports = router;
