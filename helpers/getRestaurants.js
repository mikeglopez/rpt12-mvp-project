const axios = require('axios');

const getRestaurants = (key, location) => {
  let link = 'https://api.yelp.com/v3/businesses/search?term=tacos&sort_by=distance';
  if (typeof location === 'object') {
    const loc = location.location;
    link += `&latitude=${loc.latitude}&longitude=${loc.longitude}`;
  } else if (typeof location === 'string') {
    link += `&location=${location}`;
  }
  return axios({
    method: 'GET',
    url: link,
    headers: {
      Authorization: `Bearer ${key}`
    }
  });
};

module.exports = getRestaurants;
