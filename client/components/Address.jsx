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
        <button type="button" onClick={this.handleClick}>Find Tacos</button>
      </form>
    );
  }
}

export default Address;
