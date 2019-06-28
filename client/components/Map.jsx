import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin: 0 auto;
  padding-left: 30px;
  text-align: left;
`;

const MapContainer = styled.div`
  height: 400px;
  width: 100%;
`;

const Map = props => (
  <Wrapper>
    {/* Placeholder */}
    <MapContainer id="map" />
  </Wrapper>
);

export default Map;
