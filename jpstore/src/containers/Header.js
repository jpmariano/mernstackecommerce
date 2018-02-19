import React, { Component } from 'react';
import Headertop from '../components/header/Headertop';
import Navigation from '../components/header/Navigation';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div id="header-wrapper" className="container-fluid">
            <Headertop />
            <Navigation />
          </div>
        </header>
    );
  }
}

export default Header;
