import React from 'react'
import './Nav.css'
import Button from '@mui/material/Button';
import GridViewIcon from '@mui/icons-material/GridView';
import { KeyboardArrowDown } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

function Nav() {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid '>
                <div className='row position-relative' >
                    <div className='col-sm-3 part1 d-flex align-items-center' >
                          <Button className='bg-success text-white catab'><GridViewIcon/> &nbsp; Browse All Categories<KeyboardArrowDown/></Button>
                    </div>
                    <div className='col-sm-7 part2 position-static'>
                        <nav>
                            <ul className='list list-inline d-flex mb-0 '>
                                <li className='list-inline-items'>
                                    <Button><Link to='/'>Home</Link></Button>
                                </li>
                                <li className='list-inline-items'>
                                    <Button><Link to='/about'>About</Link></Button>
                                </li>
                                <li className='list-inline-items'>
                                    <Button><Link>Shop</Link></Button>
                                </li>
                                <li className='list-inline-items'>
                                    <Button><Link>Vendors</Link></Button>
                                </li>
                                <li className='list-inline-items mega position-static'>
                                    <Button><Link>Mega Menu <KeyboardArrowDown/></Link></Button>
                                    <div className='dropdown_menu megamenu'>
                                    {/* <div className='row'>
                                        <div className='col'>
                                            <h1 className='text-success'>fruits & Vegitables</h1>
                                        </div>
                                        <div className='col'>
                                            <h1>
                                            Breakfast & Dairy
                                            </h1>
                                        </div>
                                        <div className='col'>
                                            <h1></h1>
                                        </div>
                                        <div className='col'>

                                        </div>
                                    </div>  */}
                                    </div>
                                </li>
                                <li className='list-inline-items'>
                                    <Button><Link>Blog</Link></Button>
                                </li>
                                <li className='list-inline-items '>
                                    <Button><Link>Pages <KeyboardArrowDown/> </Link></Button>
                                <div className='dropdown_menu'>
                                    <ul >
                                       <li><Button><Link to='/about'>About us</Link></Button></li>
                                       <li><Button><Link>contact</Link></Button></li>
                                       <li><Button><Link>My Account</Link></Button></li>
                                       <li><Button><Link>Login</Link></Button></li>
                                       <li><Button><Link>Register</Link></Button></li>
                                       <li><Button><Link>Forget Password</Link></Button></li>
                                       <li><Button><Link>Reset Password</Link></Button></li>
                                       <li><Button><Link>Purchase Guide</Link></Button></li>
                                       <li><Button><Link>Privacy Policy</Link></Button></li>
                                       <li><Button><Link>Terms & Conditon</Link></Button></li>
                                       <li><Button><Link>hii</Link></Button></li>
                                    </ul>
                                </div>
                                </li>
                                <li className='list-inline-items'>
                                    <Button><Link>Contact</Link></Button>
                                </li>

                            </ul>

                        </nav>
                    </div>
                    <div className='col-sm-2 part3 d-flex align-items-center'>
                        <div className='phNO d-flex align-itmes-center '>
                            <span><HeadphonesOutlinedIcon/></span>
                            <div className='info ml-3 mb-0'>
                                <h4 className='text-success mb-0'>1900-777</h4>
                                <p className='mb-0'>24*7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Nav
