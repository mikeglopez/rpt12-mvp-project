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
        {console.log(this.props.restaurants)}
        {/* <Restaurant restaurants={this.props.restaurants} />
        <Restaurant restaurants={this.props.restaurants} />
        <Restaurant restaurants={this.props.restaurants} /> */}
        {this.props.restaurants.map((restaurant, id) => <Restaurant key={id} restaurant={restaurant} />)}
      </div>
    );
  }
}

export default List;
