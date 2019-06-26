const express = require('express');
const getLocation = require('../helpers/getLocation.js');

const app = express();
const port = process.env.PORT || 3000;
const token = process.env.GOOGLEMAPS_API;

app.use(express.static('public'));

app.post('/geolocation', (req, res) => {
  getLocation(token)
    .then((result) => {
      res.status(200).send(result.data.location);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
