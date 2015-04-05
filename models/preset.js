var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Preset model
var PresetSchema = new Schema({
  height: String
});

module.exports = mongoose.model('Preset', PresetSchema);