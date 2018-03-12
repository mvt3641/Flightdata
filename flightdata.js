var mysql =require('mysql');


module.exports={

var connection = mysql.createConnection({

  host: 'localhost',
  port: 3306,

  user: 'root',


  password: 'root',
  database: 'flight_data_db'
});


  connection.connect(function(err){
    if (err) throw err;
    console.log('connection id '+connection.threadId);
     Pulldata();
  });



function Pulldata(){
 var WindsArr = [];
var queryString = 'SELECT * FROM asitrep';

connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;

    for (var i in rows) {
        console.log('Winds Aloft: ', rows[i].GROUND_);
        WindsArr.push(rows[i].GROUND_);
    }
});

//connection.end();
};
}

// connection.query('SELECT * FROM `asitrep` WHERE `Winds_Aloft` = ?', [], function (error, results, fields) {
//   // error will be an Error if one occurred during the query
//   // results will contain the results of the query
//   // fields will contain information about the returned results fields (if any)
// });
// });
// // console.log(results);
// };
//
// };
