const images = require('./imagesTableSeeder.js')
const properties = require('./propertiesTableSeeder.js')

// HOW MANY PROPERTY ENTRIES YOU WANT TO GENERATE
let propertyEntries = 10;
let imagesPerProperty = 3;

properties.makePropertiesTableData(propertyEntries)
  .then(() => (console.log('sucess for properties table data')))
  .catch(() => (console.log('no bueno')))

images.makeImagesTableData(propertyEntries, imagesPerProperty)
  .then(() => (console.log('sucess for images table data')))
  .catch(() => (console.log('no bueno')))
