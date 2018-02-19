import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
        <div className="banners">
            <div className="banner-1">
                <div className="banner-box">
                    <img src='http://placekitten.com/g/270/269' alt="banner-1" className="img-responsive"></img>
                        <div className="s-desc"><div>
                        <h5>graphic tees</h5>
                        <h6>from $199.99</h6></div>
                    <a href="index.php?route=product/product&amp;path=57&amp;product_id=33" className="btn">shop now</a></div>
                </div>
            </div>
        </div>
    );
  }
}

export default Banner;

