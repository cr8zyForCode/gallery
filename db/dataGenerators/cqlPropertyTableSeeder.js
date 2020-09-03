const fs = require('fs');
const fake = require('./fakeData.js')

// HOW MANY PROPERTY ENTRIES DO YOU WANT TO GENERATE
const entries = 87;
const entriesPerFile = 15;
// FAKE DATA IMPORTED FROM fakeData.js
const descriptions = fake.propertyDescriptions;
const ratings = fake.ratings;
const reviewTotals = fake.reviewTotals;
const isSuperhost = fake.isSuperhost;
const cities = fake.cities;
const states = fake.states;
const countries = fake.countries;

const makePropertiesTableData = (idStart, idEnd, writer, encoding, callback) => {
  let i = idEnd;
  let id = idStart;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      let data = `\n${id},'${cities[i % 11]}','${countries[i % 4]}',`;
      data += `${reviewTotals[i % 7]},'${descriptions[i % 9]}',${ratings[i % 8]},`;
      data += `'${states[i % 5]}',${isSuperhost[i % 6]}`;
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
  write();
};


let cadence = entries / entriesPerFile;
let fileNumber = 1;
let startId = 0;
let endId = entriesPerFile * fileNumber;

while (cadence > 0) {
  let writePropertyData = fs.createWriteStream(`propertiesData${fileNumber}.csv`);
  writePropertyData.write(`id,city,country,review_total,small_description,star_rating,state_province,superhost`);
  makePropertiesTableData(startId, endId, writePropertyData, 'utf-8', () => {
    writePropertyData.end();
  });
  startId = endId;
  fileNumber++;
  endId = (endId + entriesPerFile) > entries ? entries : endId += entriesPerFile;
  cadence--;
};

console.log(`writing ${entries} property entries!`);