const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//import database
const db = require('../db/index');

app.use(express.json());
//send static files inside the public folder
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('get request')
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
});