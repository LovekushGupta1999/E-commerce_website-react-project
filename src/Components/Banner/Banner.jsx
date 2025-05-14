import './style.css';
import React from 'react';
import Banner1 from './assets/banner1.jpg'; // Adjust path as needed
import Banner2 from './assets/banner2.jpg';

const Banner = () => {
  return (
    <div className="bannerSection">
      <div className='container-fluid'>
        <div className='row'>

          <div className='col'>
            <div className='box'>
              <img src={Banner1} className='w-100 transition' alt="Banner 1" />
            </div>
          </div>

          <div className='col'>
            <div className='box'>
              <img src={Banner2} className='w-100 transition' alt="Banner 2" />
            </div>
          </div>

          <div className='col'>
            <div className='box'>
              <img src={Banner1} className='w-100 transition' alt="Banner 3" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
