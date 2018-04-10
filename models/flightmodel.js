var mongoose = require('mongoose');



var flightSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  date: {
    type: {},
  },

  month: {
    type: Number
  },
  aerostat_SN:{
    type:String
  },
  site_ID: {
    type:String
  },
  hour:{
    type: Number
  },
  system_ST: {
    type: String
  },
  flight_ST: {
    type: {}
  },
  reason: {
    type: String
  },
  launches: {
    type: Number
  },
  recoveries: {
    type: Number
  },
  flight: {
    type: Number
  },
  tension: {
    type: Number
  },
  winds_Aloft:{
  type: Number
  },
  pitch:{
    type: Number
  },
  helium:{
    type: Number
  },
  ballonet: {
    type: Number
  },
  ground_Winds:{
    type: Number
  },
  barometer: {
    type: Number
  }

});

var flight = mongoose.model('flight',flightSchema);

module.exports = flight;
