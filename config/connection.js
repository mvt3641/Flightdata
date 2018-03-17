var mysql=require('mysql');

var connection =mysql.createConnection({

  host: 'localhost',
  port:  3306,

  user: 'root',
  password: 'root',
  database: 'flight_data_db'
});


  connection.connect(function(err){
    if (err) throw err;
    console.log('connection id '+connection.threadId);

  });

  module.exports = connection;
