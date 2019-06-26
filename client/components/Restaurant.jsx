import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Latitude: {this.props.lat} | Longitude: {this.props.long}
      </div>
    );
  }
}

export default Restaurant;
