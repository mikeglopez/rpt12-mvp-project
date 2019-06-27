import React from 'react';
import styled from 'styled-components';
import Restaurant from './Restaurant.jsx';

const Wrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding-left: 30px;
`;

const Subtitle = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
  font-family: 'Permanent Marker', cursive;
  text-align: center;
`;

const List = props => (
  <Wrapper>
    <Subtitle>Tacos Near {(typeof props.location === 'string' && props.location.length) ? props.location : 'You'}</Subtitle>
    {props.restaurants.map((restaurant, id) => <Restaurant key={id} restaurant={restaurant} />)}
  </Wrapper>
);

export default List;
