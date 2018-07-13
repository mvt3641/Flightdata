var mongoose = require('mongoose');



var flightSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

  month: Number,
  hour: {
    type: {}
  },
  flight_ST: {
    type: {}
  },
  tension: Number,
  winds_Aloft: Number,
  helium: Number,
  ballonet: Number,
  ground_Winds: Number,
  barometer: Number

});

var flight = mongoose.model('flight',flightSchema);

module.exports = flight;
