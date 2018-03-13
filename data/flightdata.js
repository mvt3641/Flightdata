// var mysql=require('mysql');
// require('../config.js');
// var winds=[];
// exports.Winds = function(){
// var queryString = 'SELECT * FROM asitrep';
// var connection =mysql.createConnection({
//
//   host: 'localhost',
//   port: 3306,
//
//   user: 'root',
//
//
//   password: 'root',
//   database: 'flight_data_db'
// });
//
//
//   connection.connect(function(err){
//     if (err) throw err;
//     console.log('connection id '+connection.threadId);
//
//   });
//
// connection.query(queryString, function(err, rows, fields) {
//     if (err) throw err;
//
//     for (var i in rows) {
//         console.log('Winds Aloft: ', rows[i].GROUND_);
//       var winds =rows[i].GROUND_;
//       //  WindsArr.push(rows[i].GROUND_);
//     }
// });
//
// //connection.end();
// };
// module.exports=winds;
