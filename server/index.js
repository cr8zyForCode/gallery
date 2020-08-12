const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//import database
const db = require('../db/index');
//import query models
let propertyQueries = require('./models/properties');

app.use(express.json());
//send static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/properties/:id', (req, res) => {
  // console.log(req.params._id);
  let _id = req.params._id
  propertyQueries.getProperties(_id, (err, house) => {
    if (err) {
      res.status(400).send('error');
    } else {
      res.status(200).send(house);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});