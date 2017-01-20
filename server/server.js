const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 3000;

// Serving APIs
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.get('/style/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../style/style.css'));
});
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js'));
});


// Data APIs
app.get('/weight/:user', (req, res) => {
  console.log('fetching weight log!');
});
app.get('/meal/:user', (req, res) => {
  console.log('fetching meal log!');
});
app.get('/macro/:user', (req, res) => {
  console.log('fetching macro log!');
});




app.listen(PORT, () => {
  console.log(`server up and listening on ${PORT}`);
});
