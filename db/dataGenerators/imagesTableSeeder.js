const fs = require('fs');
const v8 = require('v8');

// HOW MANY PROPERTY ENTRIES DO YOU WANT TO HAVE IMAGES
const PE = 10000000;
const randomIPP = [5, 15, 10, 15, 10, 20, 55, 20, 12, 11, 17];

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
writeImageData.write(`id, property_id, url, small_description, grouping`, 'utf8');

let imageEntries = 0;

function makeImagesTableData(writer, encoding, callback) {

  let i = PE;
  let id = 0;
  let propertyIdTracker = 0;

  function write() {
    let ok = true;
    do {
      i--;
      propertyIdTracker++;
      let ipp = randomIPP[i % 11];
      imageEntries += ipp;
      let data = '';
      for (let k = 0; k < ipp; k++) {
        id += 1;
        data += `\n${id},${propertyIdTracker},`
        data += `https://sdc08092020image.s3-us-west-1.amazonaws.com/${(id + k) % 70}.jpeg,`;
        data += `'${descriptions[i % 7]}',${k + 1}`;
      }
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
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
  console.log(`wrote ${imageEntries} image  entries!`)
});
