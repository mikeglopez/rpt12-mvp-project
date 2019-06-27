import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import phoneFormatter from 'phone-formatter';

const Wrapper = styled.div`
  padding-left: 10px;
`;

const Title = styled.a`
  display: block;
  font-size: 1.17em;
  font-weight: bolder;
  margin: auto;
`;

const RestaurantInfo = props => (
  <Wrapper>
    <Title href={props.restaurant.url}>{props.restaurant.name}</Title>
    <StarRatings
      numberOfStars={5}
      rating={props.restaurant.rating}
      starDimension="18px"
      starRatedColor="#990000"
      starSpacing="1px"
    /> {props.restaurant.review_count} Reviews
    <br />
    {props.restaurant.phone ? phoneFormatter.format((phoneFormatter.normalize(props.restaurant.phone)), '(NNN) NNN-NNNN') : ''}
    <br />
    {props.restaurant.location.address1} {props.restaurant.location.state}, {props.restaurant.location.zip_code}
    <br />
    {(props.restaurant.distance / 1609.344).toFixed(2)} miles away
  </Wrapper>
);

export default RestaurantInfo;
