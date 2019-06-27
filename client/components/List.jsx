import React from 'react';
import Restaurant from './Restaurant.jsx';

const List = props => (
  <div>
    <h2>Tacos Near {(typeof props.location === 'string' && props.location.length) ? props.location : 'You'}</h2>
    {props.restaurants.map((restaurant, id) => <Restaurant key={id} restaurant={restaurant} />)}
  </div>
);

export default List;
