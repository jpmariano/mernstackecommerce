import React, { Component } from 'react';


class Shoppingcart extends Component {
  render() {
    return (
        <div id="shoppingcart" className="cart toggle-wrap">
            <button type="button" data-loading-text="Loading..." className="toggle">
                <i className="fa fa-shopping-cart"></i>
                <strong>Cart: </strong>
                                <span id="cart-total2" className="cart-total2">0</span>
                        </button>
        </div>
    );
  }
}

export default Shoppingcart;