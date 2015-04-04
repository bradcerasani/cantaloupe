var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// State model
var StateSchema = new Schema({
  height: String,
  moving: Boolean,
  direction: String
});

module.exports = mongoose.model('State', StateSchema);