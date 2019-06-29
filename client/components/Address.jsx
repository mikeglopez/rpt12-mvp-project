import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ address: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.state.address);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Or enter your address" value={this.state.address} onChange={this.handleChange} />
        <input type="button" value="Find Tacos" onClick={this.handleClick} />
      </form>
    );
  }
}

export default Address;
