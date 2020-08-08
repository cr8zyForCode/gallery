const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//import database
const db = require('../db/index');

app.use(express.json());
//send static files inside the public folder
// app.use(express.static(path.join(__dirname, 'public')));
let propertyQueries = require('./models/properties');
app.get('/properties', (req, res) => {
  propertyQueries.getProperties((err, documents) => {
    if (err) {
      res.status(400).send('error');
    } else {
      res.status(200).send(documents);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});