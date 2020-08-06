//generate fake data inside of mongodb server

//list of 10

//let adjectives = [Big, Beautiful, Comfortable, Cosy, Huge, Small, Homely ]

//let cities = [Los Angeles, 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Irvine'];

//Description - adjective + city name + home

//star rating
//create a rating between 3-5 with 2 decimal points

//review total
//random number between 50-100

//superhost
//random between 0 and 1

//city, state, united states
//which ever city is chosen in description + CA, United States

//images
//random from the S3 buckets

//create a randomizer function (min, max)

function randomizer(min, max, isRounded = true) {
  let randomNumber;
  if (isRounded) {
    randomNumber = Math.floor(Math.random() * (max - min) + min);
  } else {

  }
  console.log(randomNumber)
  return randomNumber
};

randomizer(1, 10)