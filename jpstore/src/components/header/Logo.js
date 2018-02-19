import React, { Component } from 'react';
import logo from '../../../src/flower-logo.png';

class Logo extends Component {
  render() {
    return (
        <div id="logo" className="col-2">
            <img src={logo} className="App-logo" alt="logo" />
        </div >
    );
  }
}

export default Logo;