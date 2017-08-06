import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Easel extends Component {
  constructor(props) {
    super(props);
    this.clock = new Worker('./counter.js');
    this.clock.onmessage = (e) => {
      this.setState({
        deltaTime: e.data
      });
    }
    this.state = {
      canvas: document.getElementById('mainView'),
      deltaTime: 0
    };
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
    this.clock.onmessage = this.clock.onmessage.bind(this);
  }

  componentDidMount() {
    this.setState({
      canvas: document.getElementById('mainView')
    })
  }

  handleKeypress(e) {
    e.preventDefault();
    console.log('down');
    this.setState({deltaTime: 99});
  };

  handleKeyup(e) {
    this.setState({deltaTime: 0});
  }

  render() {
    const {
      width,
      height
    } = this.props;

    const ctx = this.state.canvas && this.state.canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#000000';
      ctx.fillText(`${this.state.deltaTime}`, 10, 50);

    }
    return (
      <div>
        <input
        type='hidden'
        onKeyDown={ (e) => this.handleKeypress(e) }
        onKeyUp={ (e) => this.handleKeyup(e) }
        autoFocus
        />
        <canvas id="mainView"
          width={ width }
          height={ height }
        ></canvas>
      </div>
    )
  }
}

export default Easel;
