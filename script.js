import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

export let options = {
  vus: 330,
  duration: '10s',
};

// export default function () {
//   http.get('http://test.k6.io');
//   sleep(1);
// }

export default function () {
  let propertyId = Math.floor(Math.random() * 1000000) + 1;
  http.get(`http://localhost:3001/propertyimages/${propertyId}`);
  sleep(1);
}

// export default function () {
//   let propertyId = Math.floor(Math.random() * (10000000)) + 1;
//   let getRequest = {
//     method: 'GET',
//     url: `http://localhost:3001/propertyimages/${propertyId}/`
//   };

//   let responses = http.batch(getRequest);
// }