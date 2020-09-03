const fs = require('fs');
const fake = require('./fakeData.js');

// HOW MANY PROPERTY ENTRIES DO YOU WANT TO HAVE IMAGES
const entries = 10000000;
const entriesPerFile = 1000000;

// FAKE DATA CONSTANTS IMPORTED FROM fakeData.js
const randomIPP = fake.ipps;
const descriptions = fake.imageDescriptions;

function makeImagesTableData(idStart, idEnd, currentImageId, writer, encoding, callback) {
  let imageEntries = 0;
  let i = idEnd;
  let id = idStart;
  let imageId = currentImageId;
  function write() {
    let ok = true;
    do {
      i--;
      propertyIdTracker++;
      let ipp = randomIPP[i % 11];
      imageEntries += ipp;
      let data = '';
      for (let k = 0; k < ipp; k++) {
        id++;
        imageId++;
        imageIdTracker++;
        data += `\n${propertyIdTracker},${k + 1},${imageId},'${descriptions[i % 7]}'`
        data += `,https://sdc08092020image.s3-us-west-1.amazonaws.com/${(id + k) % 70}.jpeg`;
      }
      if (i === idStart) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > idStart && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
};

let cadence = entries / entriesPerFile;
let fileNumber = 1;
let startId = 0;
let endId = entriesPerFile * fileNumber;
let propertyIdTracker = 0;
let imageIdTracker = 0;

while (cadence > 0) {
  const writeImageData = fs.createWriteStream(`imagesData${fileNumber}.csv`);
  writeImageData.write(`property_id,grouping,id,small_description,url`, 'utf8');
  makeImagesTableData(startId, endId, imageIdTracker, writeImageData, 'utf-8', () => {
    writeImageData.end();
  });
  startId = endId;
  fileNumber++;
  endId = (endId + entriesPerFile) > entries ? entries : endId += entriesPerFile;
  cadence--;
};

console.log(`writing images using ${entries} property ids`);