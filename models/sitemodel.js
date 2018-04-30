var mongoose = require('mongoose');


var siteinfoSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,

sitename:{
  type: {}
},
hub: {
  type: String
},
system: {
  type:{}
},
// crew: [{ type: Schema.Types.ObjectId, ref: 'personalinfo' }],
supportingunit:{
  type:{}
}
});

var siteinfo = mongoose.model('siteinfo',siteinfoSchema,"Sitestats");

module.exports = siteinfo;
