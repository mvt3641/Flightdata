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
supportingunit:{
  type:{}
}
})

var siteinfo = mongoose.model('siteinfo',siteinfoSchema);

module.exports = siteinfo;
