import React from 'react';
import styled from 'styled-components';

const Link = styled.div`
  color: #1F7A37;
  cursor: pointer;
  display: inline-block;
  float: right;
  height: 25px;
  padding: 0 32px 20px 32px;

  :hover {
    border-bottom: 2px solid #E6E6E6;
    color: #34CB5C;
  }
`;

const Loggedout = props => (
  <div>
    <Link onClick={props.onClick}>Sign Up</Link>
    <Link onClick={props.onClick}>Login</Link>
  </div>
);

const Loggedin = props => (
  <div>
    <Link onClick={props.onClick}>Logout</Link>
  </div>
);

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let bar;

    if (this.props.isLoggedIn) {
      button = <Loggedin onClick={this.handleLogoutClick}
    }
    return (
      <div>
        <Link>{this.props.isLoggedIn ? '' : 'Sign Up'}</Link>
        <Link>{this.props.isLoggedIn ? 'Log Out' : 'Log In'}</Link>
      </div>
    );
  }
}

export default Links;
