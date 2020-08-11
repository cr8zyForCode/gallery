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
  images: Array
});

var Property = mongoose.model('Property', propertySchema);
var Image = mongoose.model('image', imagesSchema);
//comment
module.exports.Property = Property;
module.exports.Image = Image;
