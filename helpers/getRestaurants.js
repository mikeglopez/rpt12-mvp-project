const axios = require('axios');

const getRestaurants = (key, location) => {
  let link = 'https://api.yelp.com/v3/businesses/search?term=tacos&categories=tacos,mexican&sort_by=distance';
  const loc = location.location;
  if (typeof loc === 'object') {
    link += `&latitude=${loc.latitude}&longitude=${loc.longitude}`;
  } else if (typeof loc === 'string') {
    link += `&location=${loc}`;
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
