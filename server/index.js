const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

//import database
const db = require('../db/index');
//import query models
const dbQueries = require('./models/properties');

//send static files inside the public folder
app.use('/rooms/:id', express.static(path.join(__dirname, '../public')));
app.use(express.json());

// CRUD operations

app.get('/properties/:id', (req, res) => {
  console.log("GET request gottenss")
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

app.post('/property/:id', (req, res) => {
  console.log("POST/property request gotten");
  res.status(201).send("POST gotten in server");
});

app.post('/images', (req, res) => {
  console.log("POST/images request gotten");
  res.status(201).send("POST gotten in server");
});

app.patch('/property', (req, res) => {
  console.log("PUT request gotten");
  res.status(204).send("PUT gotten in server");
});

app.patch('/images', (req, res) => {
  console.log("PUT request gotten");
  res.status(204).send("PUT gotten in server");
});

app.delete('/property/:id', (req, res) => {
  console.log("DELETE request gotten");
  res.status(204).send("DELETE gotten in server");
})

app.delete('/images', (req, res) => {
  console.log("DELETE request gotten");
  res.status(204).send("DELETE gotten in server");
})

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});