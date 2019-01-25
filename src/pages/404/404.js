import React, { Component } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const FlexExample = () => (
  <div className="flex-container">
    404
  </div>
);

class Undefined extends Component {
  render() {
    return (
      <div>
      <h1>about</h1>
      <FlexExample />
    </div>
    );
  }
}

export default Undefined;
