var mysql=require('mysql');

var connection =mysql.createConnection({

  host: 'localhost',
  port: 3000,

  user: 'root',
  password: 'DodgeCity41',
  database: 'flight_data_db'
});


  connection.connect(function(err){
    if (err) throw err;
    console.log('connection id '+connection.threadId);

  });

  module.exports = connection;
