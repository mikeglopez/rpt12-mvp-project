import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import Address from './components/Address.jsx';
import List from './components/List.jsx';
import MapContainer from './components/MapContainer.jsx';
import Links from './components/Links.jsx';
import Signup from './components/Signup.jsx';

const Wrapper = styled.div`
  color: #333333;
  font-family: Verdana, Arial, sans-serif;

  a:link, a:visited {
    color: #333333;
    text-decoration: none;
  }

  a:hover, a:active {
    color: #666666;
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

const Input = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

const Outputs = styled.div`
  min-width: max-content;
  text-align: center;

  &::after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Left = styled.div`
  float: left;
  width: 60%
`;

const Right = styled.div`
  float: right;
  width: 40%
`;

const Userbar = styled.div`
  height: 50px;
  width: 100%;
  margin: 20px;
  display: block;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'public',
      location: {
        latitude: 41.874,
        longitude: -87.649
      },
      address: '',
      restaurants: [],
      isLoggedIn: false,
      userdata: {
        username: '',
        password: '',
        favorites: []
      }
    };

    this.getLocation = this.getLocation.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.search = this.search.bind(this);
    this.geocode = this.getGeocode.bind(this);
    this.signup = this.signup.bind(this);
    this.register = this.register.bind(this);
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

  getLocation() {
    $.ajax({
      method: 'POST',
      url: '/geolocation',
      success: (data) => {
        this.setState({
          address: '',
          location: {
            latitude: data.lat,
            longitude: data.lng
          }
        });
        this.search();
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

  signup() {
    $.ajax({
      method: 'GET',
      url: '/signup',
      success: () => {
        // this is the sign up page
        this.setState({
          page: 'signup'
        });
      }
    });
  }

  register(userdata) {
    $.ajax({
      method: 'POST',
      url: '/private',
      data: {
        username: userdata.username,
        password: userdata.password,
        favorites: userdata.favorites
      },
      success: (data) => {
        // this is the private/logged in page
        console.log(`Registered ${data.username}!`);
        this.setState({
          page: 'private',
          isLoggedIn: true
        });
      },
      error: (err) => {
        if (err.responseJSON.code === 11000) {
          alert(`The username ${userdata.username} has already been taken. Please select another username.`);
        } else {
          console.log(err);
        }
      }
    });
  }

  render() {
    let Output;

    switch (this.state.page) {
      case 'signup':
        Output = () => (
          <Signup register={this.register} />
        );
        break;

      default:
        Output = () => (
          <div>
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
              <Left>
                <List address={this.state.address} location={this.state.location} restaurants={this.state.restaurants} />
              </Left>
              <Right>
                <MapContainer location={this.state.location} restaurants={this.state.restaurants} />
              </Right>
            </Outputs>
          </div>
        );
    }
    return (
      <Wrapper>
        <Userbar>
          <Links page={this.page} signup={this.signup} isLoggedIn={this.state.isLoggedIn} />
        </Userbar>
        <Title>Tacomatic</Title>
        {<Output />}
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
