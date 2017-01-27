const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// think about using config module for environment variables
// think about using Winston for logging (no console logs?!)

const app = express();


// imported service routes
const userRoute = require('./users/userRoute');




app.use(cookieParser());
app.use(bodyParser.json());


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


// API Gateways
// organized by service (user, macro, weight, meal)

app.use('/users', userRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server up and listening on ${PORT}`);
});
