const fs = require('fs');

// array of small_descriptions
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
// array of star_rating
const ratings = [3.8, 3.9, 4.1, 4.3, 4.5, 2.9, 3, 4, 4.8];
// array of review_total
const reviewTotals = [22, 12, 43, 54, 13, 5, 34, 65, 15];
// array of superhost option
const isSuperhost = [true, false];
// arrya of cities
const cities = [
  'Los Angeles',
  'Irvine',
  'Laguna',
  'Berkeley',
  'Albany',
  'San Francisco',
  'Palm Springs',
  'Santa Monica',
  'Oakland'
];
// array of state_province
const states = ['CA', 'AL', 'OR'];
// array of countries
const countries = ['United States', 'United States', 'United States', 'Canada'];

const makePropertiesTableData = (entries) => {
  let dataString = `id, small_description, star_rating, `;
  dataString += `review_total, superhost, city,state_province, country\n`;
  for (let i = 1; i <= entries; i++) {
    dataString += `'${i}', '${descriptions[i % 9]}', ${ratings[i % 9]}, `;
    dataString += `${reviewTotals[i % 9]}, ${isSuperhost[i % 2]}, `;
    dataString += `'${cities[i % 9]}', '${states[i % 3]}', '${countries[i % 4]}'\n`;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('propertiesData.csv', dataString, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

module.exports = { makePropertiesTableData };