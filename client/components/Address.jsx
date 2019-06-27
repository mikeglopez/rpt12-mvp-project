import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ address: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.address);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Or enter your address" value={this.state.address} onChange={this.handleChange} />
        <input type="submit" value="Find Tacos" />
      </form>
    );
  }
}

export default Address;
