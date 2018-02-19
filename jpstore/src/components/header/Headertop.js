import React, { Component } from 'react';
import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';

class Headertop extends Component {
  render() {
    return (
        <div id="headertop" className="row">
            <Logo />
            <Search />
            <Cart />
        </div>
    );
  }
}

export default Headertop;