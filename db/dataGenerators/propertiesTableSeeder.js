const fs = require('fs');
const fake = require('./fakeData.js');

// HOW MANY PROPERTY ENTRIES DO YOU WANT TO GENERATE
const PE = 2000000;

// FAKE DATA IMPORTED FROM fakeData.js
const descriptions = fake.propertyDescriptions;
const ratings = fake.ratings;
const reviewTotals = fake.reviewTotals;
const isSuperhost = fake.isSuperhost;
const cities = fake.cities;
const states = fake.states;
const countries = fake.countries;

const writePropertyData = fs.createWriteStream('propertiesData.csv');
writePropertyData.write(`id,small_description,star_rating,review_total,superhost,city,state_province,country`);

const makePropertiesTableData = (writer, encoding, callback) => {
  let i = PE;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      let data = `\n${id},'${descriptions[i % 9]}',${ratings[i % 8]},`;
      data += `${reviewTotals[i % 7]},${isSuperhost[i % 6]},`;
      data += `'${cities[i % 11]}','${states[i % 5]}','${countries[i % 4]}'`;
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
  write();
};

makePropertiesTableData(writePropertyData, 'utf-8', () => {
  writePropertyData.end();
  console.log(`wrote ${PE} property entries!`);
});
