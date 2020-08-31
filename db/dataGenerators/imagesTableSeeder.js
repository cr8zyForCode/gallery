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

// const makeImagesTableData = (propertyEntries, imagesPerProperty) => {
//   imagesPerProperty = imagesPerProperty < 2 ? 2 : imagesPerProperty;

// const groupings = Array.from(Array(imagesPerProperty), (_, i) => i + 1);
// const groupingFactor = groupings.length;

//   let dataString = `id, property_id, url, small_description, grouping\n`;
//   let entries = propertyEntries * imagesPerProperty;
//   let propertyIdTracker = 1;

//   for (let i = 1; i <= entries; i++) {
//     dataString += `${i},${propertyIdTracker},'${urls[i % 16]}', `;
//     dataString += `'${descriptions[i % 7]}',${groupings[i % groupingFactor]}\n`;
//     if (i % groupingFactor === 0) {
//       propertyIdTracker++
//     };
//   }

//   return new Promise((resolve, reject) => {
//     fs.writeFile('imagesData.csv', dataString, (err, data) => {
//       // fs.createWriteStream('imagesData.csv', dataString, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }

const writeImageData = fs.createWriteStream('imagesData.csv');
writeImageData.write(`id, property_id, url, small_description, grouping\n`, 'utf8');

function makeImagesTableData(writer, encoding, callback) {
  let i = 5000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      // const groupings = Array.from(Array(imagesPerProperty), (_, i) => i + 1);
      // const groupingFactor = groupings.length;
      i -= 1;
      id += 1;
      // let data = `${i},${propertyIdTracker},'${urls[i % 16]}',`;
      // data += `'${descriptions[i % 7]}',${groupings[i % groupingFactor]}\n`;
      let data = `${id},${id},'${urls[i % 16]}',`;
      data += `'${descriptions[i % 7]}',${id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}

makeImagesTableData(writeImageData, 'utf-8', () => {
  writeImageData.end();
});


module.exports = { makeImagesTableData };