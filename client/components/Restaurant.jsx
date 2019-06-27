import React from 'react';

const Restaurant = props => (
  <div>
    {props.restaurant.name} - Distance: {(props.restaurant.distance / 1609.344).toFixed(2)} miles away
  </div>
);

export default Restaurant;
