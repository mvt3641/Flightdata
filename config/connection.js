

var mongoose =require('mongoose');

mongoose.Promise = global.Promise;
var dbc;
// mongoose.Promise = Promise;
// var connection = mongoose.connect("mongodb://localhost/")
var connection = mongoose.connect("mongodb://flighttest:coding41@ds231723.mlab.com:31723/flightdata_testdb")
.then(function(){
console.log("database connected..");
});


  module.exports = connection;
