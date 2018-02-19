import React, { Component } from 'react';
import Slider from 'react-slick';


class SimpleSlider extends Component  {
  
  render () {
    var settings = {
      dots: true,
      infinite: true,
      loop: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="slider-container">
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/825/780' /></div>
          <div><img src='http://placekitten.com/g/825/780' /></div>
          <div><img src='http://placekitten.com/g/825/780' /></div>
          <div><img src='http://placekitten.com/g/825/780' /></div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
