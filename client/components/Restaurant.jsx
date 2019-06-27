import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.restaurant.name} - Distance: {(this.props.restaurant.distance / 1609.344).toFixed(2)} miles away
      </div>
    );
  }
}

export default Restaurant;
