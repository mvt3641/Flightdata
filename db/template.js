var json2csv = require('json2csv');

exports.get = function(req,res){


var fields =[
'date',
'month',
'aerostat_SN',
'site_ID',
'time',
'system_ST',
'flight_ST',
'reason',
'launches',
'recoveries',
'flights',
'tension',
'winds_Aloft',
'pitch',
'helium',
'ballonet',
'ground_Winds',
'ground_Temp',
 'barometer'
];

var csv = json2csv({data: '', fields:fields});
// var csv = json2csv.parse({data:'', fields: fields});
   // var csv = json2csv.parse({fields: fields});
res.set("Content-Disposition", "attachment;filename=sitrep.csv");
res.set("Content-Type", "application/octet-stream");

res.send(csv);

};
