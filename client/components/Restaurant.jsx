import React from 'react';
import styled from 'styled-components';
import RestaurantInfo from './RestaurantInfo.jsx';

const Wrapper = styled.div`
  border-top: 1px solid #E6E6E6;
  border-bottom: 1px solid #E6E6E6;
  min-height: 115px;
  padding: 10px 0 10px 10px;
`;

const Link = styled.a`
  align-items: center;
  display: flex;
  justify-content: left;
`;

const Picture = styled.img`
  border-radius: 4px;
  display: inline-block;
  flex-shrink: 0;
  height: 100px;
  width: 100px;

  @media only screen and (max-width: 450px) {
    height: 75px;
    width: 75px;
  }
`;

const Info = styled.div`
  display: inline-block;
  text-align: left;
`;

const Restaurant = props => (
  <Wrapper>
    <Link target="_blank" rel="noreferrer noopener" href={props.restaurant.url}>
      <Picture src={props.restaurant.image_url} alt={props.restaurant.name} />
      <Info><RestaurantInfo restaurant={props.restaurant} /></Info>
    </Link>
  </Wrapper>
);

export default Restaurant;
