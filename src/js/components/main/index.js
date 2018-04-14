import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class MainComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Fragment>Hello World</Fragment>
    );
  }
}

MainComponent.propTypes = {};

export default MainComponent;
