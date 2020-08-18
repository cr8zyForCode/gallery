const express = require('express');
const path = require('path');
const app = express();
const PORT = 3006;

//import database
const db = require('../db/index');
//import query models
let dbQueries = require('./models/properties');

//send static files inside the public folder
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/properties/:id', (req, res) => {
  let id = req.params.id;
  dbQueries.getProperties(id, (err, data) => {
    if (err) {
      res.status(400).send('error');
    } else {
      console.log('success')
      res.status(200).send(data);
    }
  });
});

app.get('/hi', (req, res) => {
  res.send('hello world')
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});