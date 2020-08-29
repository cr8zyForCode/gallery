const fs = require('fs');

// array of urls
const urls = [
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat1.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat2.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat3.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat4.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat5.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat6.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat7.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat8.jpeg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat9.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat10.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat11.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat12.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat13.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat14.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat15.jpg",
  "https://feccatsbucket.s3-us-west-1.amazonaws.com/cat16.jpg"
];

// array of small descriptions
const descriptions = [
  'house',
  'bathroom',
  'bathroom',
  'bedroom',
  'bedroom',
  'bedroom',
  'backyard'
];

const makeImagesTableData = (propertyEntries, imagesPerProperty) => {
  imagesPerProperty = imagesPerProperty < 2 ? 2 : imagesPerProperty;
  // takes in the ammount of property entries

  // arrya of porperty id
  // ids to be the same at the amount of entries
  // grouping
  const groupings = Array.from(Array(imagesPerProperty), (_, i) => i + 1);
  const groupingFactor = groupings.length;

  // create a CSV string
  let dataString = `id, property_id, url, small_description, grouping\n`;


  // total images is propertyEntries multiplied by imagesPerProperty
  let entries = propertyEntries * imagesPerProperty;
  let propertyIdTracker = 1;

  for (let i = 1; i <= entries; i++) {
    // properdy_id
    // increment property id by one every time module for grouping factor  passes 0

    dataString += `${i}, ${propertyIdTracker}, '${urls[i % 16]}', `;
    dataString += `'${descriptions[i % 7]}', ${groupings[i % groupingFactor]}\n`;

    if (i % groupingFactor === 0) {
      propertyIdTracker++
    };
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('imagesData.csv', dataString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

module.exports = { makeImagesTableData };