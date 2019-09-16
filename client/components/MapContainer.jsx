/* eslint-disable class-methods-use-this */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import phoneFormatter from 'phone-formatter';
import Marker from './Marker.jsx';

const Wrapper = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 80px;

@media only screen and (max-width: 1024px) {
  height: 300px;
}
`;

const MapContainer = props => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyBhzi5ts3oQefyyUDcBF7x3AfticzDt0MA',
        libraries: ['places', 'directions']
      }}
      defaultZoom={13}
      center={[props.location.latitude, props.location.longitude]}
      yesIWantToUseGoogleMapApiInternals
    >
      <Marker
        key={20}
        text="Current Location"
        phone=""
        address=""
        lat={props.location.latitude}
        lng={props.location.longitude}
        current="true"
      />
      {props.restaurants.map((restaurant, id) => (
        <Marker
          key={id}
          text={restaurant.name}
          phone={restaurant.phone ? phoneFormatter.format((phoneFormatter.normalize(restaurant.phone)), '(NNN) NNN-NNNN') : ''}
          address={restaurant.location}
          lat={restaurant.coordinates.latitude}
          lng={restaurant.coordinates.longitude}
          current="false"
        />
      ))}
    </GoogleMapReact>
  </Wrapper>
);

export default MapContainer;
