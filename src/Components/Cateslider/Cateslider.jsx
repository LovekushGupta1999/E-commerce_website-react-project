import React, { useState } from 'react';
import Slider from "react-slick";
import './style.css';

const CatSlider = () => {
    const [itemBg, setItemBg] = useState([
        '#fffceb', '#ecffec', '#feefea', '#fff3eb', '#fff3ff', '#f2fce4',
        '#feefea', '#fffceb', '#feefea', '#ecffec', '#feefea', '#fff3eb',
        '#fff3ff', '#f2fce4', '#feefea', '#fffceb', '#feefea', '#ecffec'
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10, 
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className='catSliderSection'>
            <div className='container-fluid'>
                <h2 className='hd'>Featured Categories</h2>
                <Slider {...settings} className='cat_slider_Main'>
                    {itemBg.map((bgColor, index) => (
                        <div className='item' key={index} style={{ backgroundColor: bgColor }}>
                            <div className="info">
                                <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png' alt="Category" />
                                <h5>Cake & Milk</h5>
                                <p>26 items</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CatSlider;
