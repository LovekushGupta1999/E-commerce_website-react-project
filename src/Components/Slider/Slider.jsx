import React from 'react'
import Slider from "react-slick";
import './Slider.css'
import sliderimg1 from "../../assets/images/slider-1.png"
import sliderimg2 from "../../assets/images/slider-2.png"
import { Fade } from '@mui/material';
import { SendOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';


function Slider1() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        // arrows:false
      };
      return (

        <section className='homeSlider'>
        
        <div className='container-fluid'>
        
        <Slider {...settings} className="home_slider_Main">
        
        <div className="item" >
        
          <img src={sliderimg1} className='w-100' />
        
        <div className="info">
        
        <h2 class="mb-4">
        
        Don't miss amazing<br />
        
        grocery deals
        
        </h2>
        
        <p>Sign up for the daily newsletter</p>
        
        </div>
        
        </div>
        
        <div className="item">
        
        <img src={sliderimg2} className='w-100' />
        
        <div className='info'>
        
        <h2 className="mb-3">
        
        Fresh Vegetables<br />
        
        Big discount
        
        </h2>
        
        <p>Sign up for the daily newsletter</p>
        
        </div>
        
        </div>
        </Slider>
        <div className='newsLetterBanner'>
          <SendOutlined/>
          <input type='text' placeholder='your email address'/>
          <Button className="bg-g">Subscribe</Button>
        </div>
        </div>
        </section>)
     
}

export default Slider1
