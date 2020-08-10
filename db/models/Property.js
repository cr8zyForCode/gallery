let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let imagesSchema = new Schema({
  imageURL: String,
  description: String
});

let propertySchema = new Schema({
  description: String,
  starRating: Number,
  reviewTotal: Number,
  superhost: Boolean,
  location: String,
  images: [imagesSchema]
});

var Property = mongoose.model('Property', propertySchema);

module.exports = Property;
