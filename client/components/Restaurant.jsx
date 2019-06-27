import React from 'react';
import styled from 'styled-components';
import RestaurantInfo from './RestaurantInfo.jsx';

const Wrapper = styled.div`
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  height: 115px;
  padding: 10px 0 0 10px;
`;

const Picture = styled.img`
  border-radius: 4px;
  display: inline-block;
  height: 100px;
  width: 100px;
`;

const Info = styled.div`
  display: inline-block;
  text-align: left;
`;

const Restaurant = props => (
  <Wrapper>
    <a href={props.restaurant.url}><Picture src={props.restaurant.image_url} alt={props.restaurant.name} /></a>
    <Info><RestaurantInfo restaurant={props.restaurant} /></Info>
  </Wrapper>
);

export default Restaurant;
