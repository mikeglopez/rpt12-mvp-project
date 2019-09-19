import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import List from './components/List.jsx';
import MapContainer from './components/MapContainer.jsx';
import Address from './components/Address.jsx';

const Wrapper = styled.div`
  color: #333333;
  font-family: Verdana, Arial, sans-serif;
  max-width: 90%;
  margin: auto;

  a:link, a:visited {
    color: #333333;
    text-decoration: none;
  }

  a:hover, a:active {
    color: #666666;
  }

  button, input[type=button] {
    background-color: #1F7A37;
    border: none;
    border-radius: 3px;
    color: #FFFFFF;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  input {
    border-radius: 3px;
    padding: 13px 30px;
    font-size: 16px;
    margin: 4px 2px;
  }
`;

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
  color: #155125;
  font-family: 'Permanent Marker', cursive;
  font-weight: 900;
  font-size: 4em;
  text-align: center;
`;

const Inputs = styled.div`
  width: 100%;
  text-align: center;
`;

const Input = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

const Outputs = styled.div`
  display: flex;
  justify-content: center;
  min-width: 90%;
  position: relative;
  text-align: center;

  > div {
    padding: 30px;
  }

  @media only screen and (max-width: 1175px) {
    > div {
      padding: 10px;
    }
  }

  @media only screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

const Map = styled.div`
  @media only screen and (max-width: 975px) {
    display: none;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        latitude: 41.874,
        longitude: -87.649
      },
      address: '',
      restaurants: []
    };

    this.getLocation = this.getLocation.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.search = this.search.bind(this);
    this.geocode = this.getGeocode.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          address: '',
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
        this.search();
      });
    } else {
      alert('Geolocation is not supported by this browser. Please enter an address.');
    }
  }

  getAddress(address) {
    new Promise((resolve) => {
      resolve(this.setState({
        location: address,
        address
      }));
    })
      .then(() => {
        this.search();
        this.getGeocode();
      });
  }

  getGeocode() {
    $.ajax({
      method: 'GET',
      url: '/geocode',
      data: { location: this.state.location },
      success: (geocode) => {
        if (this.state.address.length) {
          this.setState({
            location: {
              latitude: geocode.lat,
              longitude: geocode.lng
            }
          });
        }
      }
    });
  }

  search() {
    $.ajax({
      method: 'GET',
      url: '/search',
      data: { location: this.state.location },
      success: (list) => {
        this.setState({
          restaurants: list
        });
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>Tacomatic</Title>
        <Inputs>
          <Input>
            <button type="button" onClick={this.getLocation}>Share Location</button>
          </Input>
          <Input>
            <Address onClick={this.getAddress} />
          </Input>
        </Inputs>
        <br />
        <Outputs>
          <div>
            <List address={this.state.address} location={this.state.location} restaurants={this.state.restaurants} />
          </div>
          <Map>
            <MapContainer location={this.state.location} restaurants={this.state.restaurants} />
          </Map>
        </Outputs>
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
