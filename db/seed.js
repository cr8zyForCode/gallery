//generate fake data inside of mongodb server
let adjectives = ['Big', 'Beautiful', 'Comfortable', 'Cosy', 'Huge', 'Small', 'Homely'];

let cities = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Irvine'];

//Description - adjective + city name + home
function createDescription() {
  let adj = adjectives[randomizer(0, adjectives.length - 1)];
  let city = cities[randomizer(0, cities.length - 1)];
  return `${adj} ${city} Home`
}

//star rating
//create a rating between 3-5 with 2 decimal points
function createStarRating() {
  return randomizer(3, 5, false)
}

//review total random number between 50-100
function createTotalReviews() {
  return randomizer(50, 100)
};

//superhost random between 0 and 1
function isSuperhost() {
  return (randomizer(0, 2) ? true : false)
};

//city, state, united states
//which ever city is chosen in description + CA, United States
function createLocation(desc) {
  //middle value is the city
  let splitCity = desc.split(' ');
  let city = (splitCity.length === 3) ? splitCity[1] : `${splitCity[1]} ${splitCity[2]}`;
  return `${city}, CA United States`
}

//images
let kitchens = [
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-kitchens/kitchen1.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-kitchens/kitchen2.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-kitchens/kitchen3.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-kitchens/kitchen4.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-kitchens/kitchen5.jpeg',
];
let bedrooms = [
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room8.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room7.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room6.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room5.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room4.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room3.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room2.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room15.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room14.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room13.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room12.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room11.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room10.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room1.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room+9.jpeg',
];
let backyards = [
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard2.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard3.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard4.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard5.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard6.jpeg'
];
let houses = [
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house10.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house11.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house2.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house3.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house4.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house5.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house6.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house8.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-houses/house9.jpeg',
];
let bathrooms = [
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom1.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom10.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom2.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom3.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom5.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom6.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom7.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom8.jpeg',
  'https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-bathrooms/bathroom9.jpeg',
];

function createImageCollection() {
  let images = {};
  //1 house
  images.house = houses[randomizer(0, houses.length)];
  //1 backyard
  images.backyard = backyards[randomizer(0, backyards.length)];
  //1 kitchen
  images.kitchen = kitchens[randomizer(0, kitchens.length)];
  //bedrooms between 2- 5
  let numberOfBedrooms = randomizer(2, 5);
  images.bedrooms = randomNumbers(numberOfBedrooms, bedrooms);
  // images.bedrooms 2-5
  let numberOfBathrooms = randomizer(2, 5);
  images.bathrooms = randomNumbers(numberOfBathrooms, bathrooms);
  return images
}

/*------------- HELPER FUNCTIONS------------- */
//create a randomizer function (min, max)
function randomizer(min, max, isRounded = true) {
  let randomNumber;
  if (isRounded) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
  } else {
    randomNumber = (Math.random() * (max - min) + min).toFixed(2);
  }
  return randomNumber
};

function randomNumbers(quantity, data) {
  //array
  let result = [];
  //random numbers = []
  let numbers = [];
  //do a while loop until q = 0
  while (quantity > 0) {
    let randomNumber = randomizer(0, data.length);
    if (!numbers.includes(randomNumber)) {
      result.push(data[randomNumber]);
      numbers.push(randomNumber);
      quantity--;
    }
  }
  return result
};

let descriptionData = createDescription();
let starRatingData = createStarRating();
let reviewData = createTotalReviews();
let superhostData = isSuperhost();
let locationData = createLocation(descriptionData);
let imagesData = createImageCollection();
console.log('description', descriptionData)
console.log('star rating', starRatingData)
console.log('review data', reviewData)
console.log('superhost', superhostData)
console.log('location data', locationData)
console.log('images data', imagesData);

