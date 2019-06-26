const axios = require('axios');

const getLocation = key => axios({
  method: 'POST',
  url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`
});

module.exports = getLocation;
