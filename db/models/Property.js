let db = require('../index.js');
let Schema = db.Schema;

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

var Property = db.model('Property', propertySchema);

//create a new image document for how long the images data is
module.exports.Image = Image;
module.exports.Property = Property;
