import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Longitude: {this.props.long} | Latitude: {this.props.lat}
      </div>
    );
  }
}

export default Restaurant;
