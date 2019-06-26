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
        <Restaurant long={this.props.long} lat={this.props.lat} />
        <Restaurant long={this.props.long} lat={this.props.lat} />
        <Restaurant long={this.props.long} lat={this.props.lat} />
      </div>
    );
  }
}

export default List;
