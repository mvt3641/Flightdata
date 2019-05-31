var mongoose = require('mongoose');

var StatusSchema = mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,

  Site1Status:String,
  Site1Notes:String,
  Site2Status:String,
  Site2Notes:String,
  Site3Status:String,
  Site3Notes:String,
  Site4Status:String,
  Site4Notes:String,
  Site5Status:String,
  Site5Notes:String,
  Site6Status:String,
  Site6Notes:String


});

var StatusRec = mongoose.model('Sitrep',StatusSchema);

module.exports = StatusRec;
