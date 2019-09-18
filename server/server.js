const express = require('express');
const getLocation = require('../helpers/getLocation.js');
const getRestaurants = require('../helpers/getRestaurants.js');
const getGeocode = require('../helpers/getGeocode.js');

const app = express();
const port = process.env.PORT || 3000;
const googleToken = process.env.GOOGLEMAPS_API;
const yelpToken = process.env.YELP_API;

app.use(express.static('public'));

app.get('/search', (req, res) => {
  const location = req.query;
  getRestaurants(yelpToken, location)
    .then((restaurants) => {
      const sorted = restaurants.data.businesses.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      res.status(200).send(sorted);
    })
    .catch(err => console.log('/search:', err.response.statusText));
});

app.get('/geocode', (req, res) => {
  const location = req.query;
  getGeocode(googleToken, location)
    .then((loc) => {
      res.status(200).send(loc.data.results[0].geometry.location);
    })
    .catch(err => console.log('/geocode:', err.response.statusText));
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
