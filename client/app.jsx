import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import List from './components/List.jsx';

const Title = styled.h1`
  text-align: center;
  font-weight: 900;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };

    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    $.ajax({
      method: 'POST',
      url: '/geolocation',
      success: (data) => {
        this.setState({
          latitude: data.lat,
          longitude: data.lng
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Title>Tacomatic</Title>
        <button type="button" onClick={this.getLocation}>Get Location</button>
        <List lat={this.state.latitude} long={this.state.longitude} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
