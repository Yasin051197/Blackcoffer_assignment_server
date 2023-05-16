const mongoose = require('mongoose');

const jsonDataSchema = new mongoose.Schema({
  intensity:Number,
  likelihood:Number,
  relevance:Number,
  start_year:String,
  country:String,
  topic:String,
  region:String,
});

const JsonData = mongoose.model('jsonData', jsonDataSchema);

module.exports = {JsonData};