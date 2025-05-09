import React from 'react';

import Slider from "react-slick";

import './style.css';

const CatSlider = () => {

    const [itemBg, setItemBg] = useState(

'#fffceb',

'#ecffec',

'#feefea',

'#fff3eb',

'#fff3ff',

'#f2fce4',

'#feefea',

'#fffceb',

'#feefea',

'#ecffec',

'#feefea',

'#fff3eb',

'#fff3ff',

'#f2fce4',

'#feefea',

'#fffceb',

'#feefea',

'#ecffec'

);



var settings = {

dots: true,

infinite: true,

speed: 500,

slides ToShow: 10,

slides ToScroll: 1,

fade: true,

arrows: true

};

return(
<>

<div className='catSliderSection'>

<div className='container-fluid">

<h2 className='hd'>Featured Categories</h2>

<Slider (...settings) className='cat_slider_Main'>


<div className='item'>

<div className="info">

<img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png'/>

<h5>Cake & Milk</h5>

<p>26 items</p>

</div>

</div>


</Slider>


</div>

</div>

</>)
