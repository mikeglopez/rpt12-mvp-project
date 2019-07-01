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

class Links extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loggedout = this.loggedout.bind(this);
    this.loggedin = this.loggedin.bind(this);
  }

  loggedout() {
    return (
      <div>
        <Link onClick={this.props.signup}>Sign Up</Link>
        <Link onClick={this.props.onClick}>Login</Link>
      </div>
    );
  }

  loggedin() {
    return (
      <div>
        <Link onClick={this.props.onClick}>Login</Link>
      </div>
    );
  }

  render() {
    let bar;

    if (this.props.isLoggedIn) {
      bar = this.loggedin();
    } else {
      bar = this.loggedout();
    }

    return (
      <div>
        {bar}
      </div>
    );
  }
}

export default Links;
