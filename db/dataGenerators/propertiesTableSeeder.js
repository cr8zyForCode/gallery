const fs = require('fs');
const v8 = require('v8');
const limitations = require('./dataCreater.js');

// HOW MANY PROPERTY ENTRIES DO YOU WANT TO GENERATE
const PE = 10000000;

const checkMemoryNative = () => {
  console.log('Memory Usage: ', process.memoryUsage())
};

const printHeapStats = () => {
  console.log('Heap Status: ', v8.getHeapSpaceStatistics())
};

const descriptions = [
  'small and charming',
  'beautyful views',
  'perfect sunsets',
  'hickers dream',
  'ocean breeze',
  'charming architecture',
  'fun summer stay',
  'great glamping',
  'watch the stars'
];
const ratings = [3.8, 3.9, 4.1, 4.3, 4.5, 2.9, 3, 4];
const reviewTotals = [22, 12, 43, 54, 13, 5, 34];
const isSuperhost = [true, false, false, false, false, false];
const cities = [
  'Los Angeles',
  'Irvine',
  'Laguna',
  'Berkeley',
  'Albany',
  'San Francisco',
  'Palm Springs',
  'Santa Monica',
  'Oakland',
  'Alameda',
  'Vancouver'
];
const states = ['CA', 'AL', 'OR', 'CA', 'BC'];
const countries = ['United States', 'United States', 'United States', 'Canada'];

const writePropertyData = fs.createWriteStream('propertiesData.csv');
writePropertyData.write(`id,small_description,star_rating,review_total,superhost,city,tate_province,country\n`);

const makePropertiesTableData = (writer, encoding, callback) => {
  let i = PE;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i--;
      id++;
      let data = `${id},'${descriptions[i % 9]}',${ratings[i % 8]},`;
      data += `${reviewTotals[i % 7]},${isSuperhost[i % 6]},`;
      data += `'${cities[i % 11]}','${states[i % 5]}','${countries[i % 4]}'\n`;
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
  write();
};

makePropertiesTableData(writePropertyData, 'utf-8', () => {
  writePropertyData.end();
  console.log(`wrote ${PE} property entries!`);
});
