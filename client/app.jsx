import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import List from './components/List.jsx';
import Address from './components/Address.jsx';

const Title = styled.h1`
  text-align: center;
  font-weight: 900;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      restaurants: []
    };

    this.getLocation = this.getLocation.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.search = this.search.bind(this);
  }

  getLocation() {
    $.ajax({
      method: 'POST',
      url: '/geolocation',
      success: (data) => {
        this.setState({
          location: {
            latitude: data.lat,
            longitude: data.lng
          }
        });
        this.search();
      }
    });
  }

  getAddress(address) {
    new Promise((resolve) => {
      resolve(this.setState({ location: address }));
    })
      .then(() => {
        this.search();
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
      <div>
        <Title>Tacomatic</Title>
        <button type="button" onClick={this.getLocation}>Share Location</button> <Address onSubmit={this.getAddress} />
        <br />
        <List location={this.state.location} restaurants={this.state.restaurants} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
