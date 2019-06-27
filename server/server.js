const express = require('express');
const getLocation = require('../helpers/getLocation.js');
const getRestaurants = require('../helpers/getRestaurants.js');

const app = express();
const port = process.env.PORT || 3000;
const googleToken = process.env.GOOGLEMAPS_API;
const yelpToken = process.env.YELP_API;

app.use(express.static('public'));

app.post('/geolocation', (req, res) => {
  getLocation(googleToken)
    .then((location) => {
      res.status(200).send(location.data.location);
    });
});

app.get('/search', (req, res) => {
  const location = req.query;
  getRestaurants(yelpToken, location)
    .then((restaurants) => {
      const sorted = restaurants.data.businesses.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      res.status(200).send(sorted);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
