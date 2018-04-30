var mongoose = require('mongoose');

var paxmodelSchema =mongoose.Schema({
 _id: mongoose.Schema.Types.ObjectId,

  firstname:{
    type: String
  },
  lastname: {
    type:String
  },
  position: {
    type: String
  },

  // Site Assignment:{
  //   type: {}
  // },
  employer:{
    type: String
  }
});


var personalinfo = mongoose.model("personalinfo",paxmodelSchema,"Roster")

module.exports = personalinfo;
