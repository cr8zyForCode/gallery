const fs = require('fs');
const v8 = require('v8');
// const limitations = require('./propertiesTableSeeder.js');
const PE = 10000000;

// HOW MANY IMAGES PER PROPERTY ENTRY DO YOU WANT TO GENERATE:
const IPP = 5;

const imageEntries = PE * IPP;
const groupings = Array.from(Array(IPP), (_, i) => i + 1);
const groupingFactor = groupings.length;

const checkMemoryNative = () => {
  console.log('Memory Usage: ', process.memoryUsage())
};

const printHeapStats = () => {
  console.log('Heap Status: ', v8.getHeapSpaceStatistics())
};

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

const descriptions = [
  'house',
  'bathroom',
  'bathroom',
  'bedroom',
  'bedroom',
  'bedroom',
  'backyard'
];

const writeImageData = fs.createWriteStream('imagesData.csv');
writeImageData.write(`id, property_id, url, small_description, grouping\n`, 'utf8');

function makeImagesTableData(writer, encoding, callback) {
  let i = imageEntries;
  let id = 0;
  let propertyIdTracker = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let data = `${id},${propertyIdTracker},'${urls[i % 16]}',`;
      data += `'${descriptions[i % 7]}',${groupings[i % groupingFactor]}\n`;
      if (i % groupingFactor === 0) {
        propertyIdTracker++
      };
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
        // if (!ok) {
        //   checkMemoryNative();
        //   printHeapStats();
        // }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}

makeImagesTableData(writeImageData, 'utf-8', () => {
  writeImageData.end();
  console.log(`wrote ${imageEntries} image entries!`)
});

module.exports = { makeImagesTableData };