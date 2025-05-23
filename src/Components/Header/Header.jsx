import React, { useEffect } from 'react'
import '../Header/Header.css'
import logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search'
import Select from '../SelectDrop/Select'
import { useState } from 'react' 
import axios from 'axios'
import { LocationOnOutlined} from '@mui/icons-material'
import Iconcompare from '../../assets/images/icon-compare.svg'
import IconHeart from '../../assets/images/icon-heart.svg'
import IconCart from '../../assets/images/icon-cart.svg'
import IconUser from '../../assets/images/icon-user.svg'
import Button from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ClickAwayListener } from '@mui/material'
import Nav from './nav/Nav.jsx'
function Header() {
    const [opendropdown,setopendropdown]=useState(false)
    const [Categories, setCategories]=useState([
       
        'Milk & Dairy',
        'Fruits & Juice',
        'Vegitables',
        'Clothing & Beauty',
        'Groceries',
        'Baking Material'
    ])

    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries/')
    },[]);

    const countrylist=[];
    const getCountry=async(url)=>{
        try{
           await axios.get(url,countrylist).then((res)=>{
            if(res!=null){
                // console.log(res.data.data)
                res.data.data.map((item)=>{
                    // console.log(item.country)   
                    countrylist.push(item.country)

                })
            }
           })
        }
        catch(error){
             console.log(error.message)
        }
    }
      
  
    return (
        <>
       <header>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-2'>
                    <img src={logo} alt="" />
                </div>
                <div className='col-sm-5'>
                    <div className='headerSearch d-flex align-item-center'>
                     <Select data={Categories} placeholder= {'All Categories'} icon={false}/>
                     
                        <div className='Search'> 
                        <input type="text" placeholder='Search for items...' />
                        <SearchIcon className='SearchIcon cursor'/>
                        </div>
                    </div>
                </div>
                <div className='col-sm-5 d-flex align-items-center'>
                    <div className='selectCountry'>
                   <Select data={countrylist} placeholder= {'Your location'} icon={<LocationOnOutlined style={{Opacity:'0.3',fontSize:'17px'}}/> } />
                   </div>

                   <ul className='list list-inline mb-0 headerTabs'>
                    <li className='list-inline-item'>
                      <span>
                        <img src={Iconcompare} alt="" />
                        <span className='badge bg-success rounded-circle'>1</span>
                        Compare </span>
                    </li>
                    <li className='list-inline-item'>
                      <span>
                        <img src={IconHeart} alt="" />
                        <span className='badge bg-success rounded-circle'>3</span>
                        Whislist </span>
                    </li>
                    <li className='list-inline-item'>
                      <span>
                        <img src={IconCart} alt="" />
                        <span className='badge bg-success rounded-circle'>2</span>
                        Cart 
                      </span>
                    </li>

                    <ClickAwayListener onClickAway={()=>setopendropdown(false)}>
                    
                    <li className='list-inline-item' >
                      <span onClick={()=>{setopendropdown(!opendropdown)}}>
                        <img src={IconUser} />
                        Account
                      </span>
                      <ul className='dropdownmenu'  style={{'display':opendropdown ? 'block' : 'none'}}>
                        <li><Button><PersonOutlineIcon/>MY ACCOUNT</Button></li>
                        <li><Button><LocationOnOutlinedIcon/>ORDER TRACKING</Button></li>
                        <li><Button><FavoriteBorderOutlinedIcon/>MY WISHLIST</Button></li>
                        <li><Button><SettingsOutlinedIcon/>SETTINGS</Button></li>
                        <li><Button><LogoutOutlinedIcon/>SIGN OUT</Button></li>
                      </ul>

                    </li>
                 </ClickAwayListener>
                    
                   </ul>
                </div>
            </div>
        </div>
       </header>
       <Nav/>
        </>
    )
}

export default Header
 