var mongoose = require('mongoose');



var flightSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  month: {
    type: Number
  },
  hour: {
    type: Number
  },
  flight_ST: {
    type: {}
  },
  tension: {
    type: Number
  },
  winds_Aloft:{
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
