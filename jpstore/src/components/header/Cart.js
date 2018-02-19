import React, { Component } from 'react';
import Shoppingcart from './Shoppingcart';
import Signin from './Signin';

class Cart extends Component {
  render() {
    return (
        <div id="cart" className="col-3">
            <div id="cart-wrapper">
                <Shoppingcart />
                <Signin />
            </div>
        </div>
    );
  }
}

export default Cart;