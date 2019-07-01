const express = require('express');
const bodyParser = require('body-parser');
const helpers = require('../helpers/helpers.js');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3000;
const googleToken = process.env.GOOGLEMAPS_API;
const yelpToken = process.env.YELP_API;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/geolocation', (req, res) => {
  helpers.getLocation(googleToken)
    .then((location) => {
      res.status(200).send(location.data.location);
    })
    .catch(err => console.log('/geolocation:', err.response.statusText));
});

app.get('/search', (req, res) => {
  const location = req.query;
  helpers.getRestaurants(yelpToken, location)
    .then((restaurants) => {
      const sorted = restaurants.data.businesses.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      res.status(200).send(sorted);
    })
    .catch(err => console.log('/search:', err.response.statusText));
});

app.get('/geocode', (req, res) => {
  const location = req.query;
  helpers.getGeocode(googleToken, location)
    .then((loc) => {
      res.status(200).send(loc.data.results[0].geometry.location);
    })
    .catch(err => console.log('/geocode:', err.response.statusText));
});

app.get('/signup', (req, res) => {
  res.status(200).send('OK');
});

app.post('/private', (req, res) => {
  const userdata = req.body;
  db.signup(userdata)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
