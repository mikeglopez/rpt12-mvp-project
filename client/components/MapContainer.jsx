/* eslint-disable class-methods-use-this */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import token from '../../config.js';

const Wrapper = styled.div`
  height: 400px;
  width: 500px;
  margin-top: 80px;
`;

class MapContainer extends React.Component {
  apiHasLoaded(map, maps) {
    console.log('map:', map);
    console.log('maps:', maps);
  }

  render() {
    return (
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: token,
            libraries: ['places', 'directions']
          }}
          defaultZoom={8}
          defaultCenter={{ lat: 41.874, lng: -87.649 }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        />
      </Wrapper>
    );
  }
}

export default MapContainer;
