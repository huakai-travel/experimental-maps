import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Easel from '../easel/index.js';

class MainComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Easel width='640' height='480'/>
    );
  }
}

export default MainComponent;
