import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/main/index.js';
import '../css/index.scss';

const react_root = document.getElementById('react-root');

class App extends Component {

  render() {
    return (
      <Main />
    );
  }
}

ReactDOM.render(<App/>, react_root);
