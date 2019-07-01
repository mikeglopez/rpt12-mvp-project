import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
`;

const Form = styled.form`

`;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      favorites: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.register({ username: this.state.username, password: this.state.password, favorites: this.state.favorites });
  }

  render() {
    return (
      <Wrapper>
        Please fill out the information below to begin saving your favorite restaurants to an easily accessible list!
        <br />
        <h5>Please note that this is a development build and data is not secure. Please use a &quot;throwaway&quot; password.</h5>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Username:
              <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Password:
              <input type="password" name="password" pattern=".{6,}" required title="6 characters minimum" value={this.state.password} onChange={this.handleInputChange} />
            </label>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </Form>
      </Wrapper>
    );
  }
}

export default Signup;
