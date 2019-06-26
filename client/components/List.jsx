import React from 'react';
import Restaurant from './Restaurant.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* Placeholder restaurant components */}
        <Restaurant lat={this.props.lat} long={this.props.long} />
        <Restaurant lat={this.props.lat} long={this.props.long} />
        <Restaurant lat={this.props.lat} long={this.props.long} />
      </div>
    );
  }
}

export default List;
