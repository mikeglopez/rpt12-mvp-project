import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

class MobileChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle();
  }

  render() {
    if (this.props.width < 976) {
      return (
        <Wrapper>
          <br />
          <button type="button" onClick={this.handleClick}>
            Show {this.props.displayMap ? 'List' : 'Map'}
          </button>
        </Wrapper>
      );
    }
    return '';
  }
}

export default MobileChoice;
