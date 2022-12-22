import React, { Component } from "react";
import Slider from "react-slick";

export default class TestSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
        <div className="slider">
   
        <Slider {...settings}>
          <div>

            
            <img width={400} height={300} src="./img/first.jpg"alt="#"/>
          </div>
          <div>
          <img width={400} height={300} src="./img/second.jpg"alt="#"/>
          </div>
          <div>
          <img width={400} height={300} src="./img/third.jpg" alt="#"/>
          </div>
          <div>
          <img width={400} height={300} src="./img/fourth.jpg"alt="#"/>
          </div>
        
        </Slider>
      </div>
    );
  }
}