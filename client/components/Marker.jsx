import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => (props.current === 'true' ? '20px' : '18px')};
  height: ${props => (props.current === 'true' ? '20px' : '18px')};
  background-color: ${props => (props.current === 'true' ? '#990000' : '#1F7A37')};
  border: 2px solid #FFFFFF;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const InfoWindow = styled.a`
  background-color: #FFFFFF;
  border-radius: 3px;
  color: #333333;
  padding: 5px;
  position: absolute;
  visibility: hidden;
  width: max-content;
  z-index: 1;

  ${Wrapper}:hover & {
    visibility: visible;
  }
`;

const Marker = props => (
  <Wrapper
    alt={props.text}
    {...props.onClick ? { onClick: props.onClick } : {}}
    current={props.current}
  >
    <InfoWindow target="_blank" rel="noreferrer noopener" href={props.url}>
      {props.text}
      <br />
      {props.phone}
      <br />
      {props.address.address1} {props.address.city} {props.address.state}
      <br />
      {props.address.zip_code}
    </InfoWindow>
  </Wrapper>
);

Marker.defaultProps = {
  onClick: null
};

export default Marker;
