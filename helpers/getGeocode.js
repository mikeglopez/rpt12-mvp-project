const axios = require('axios');

const getGeocode = (key, location) => axios({
  method: 'GET',
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${location.location.split(' ').join('+')}&key=${key}`
});

module.exports = getGeocode;
