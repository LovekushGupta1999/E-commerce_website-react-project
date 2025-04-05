import React from 'react'
import './Nav.css'
import Button from '@mui/material/Button';
import GridViewIcon from '@mui/icons-material/GridView';
import { KeyboardArrowDown } from '@mui/icons-material'

function Nav() {
    return (
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-sm-3 part1'>
                          <Button className='bg-success text-white catab'><GridViewIcon/> &nbsp; Browse All Categories<KeyboardArrowDown/></Button>
                    </div>
                    <div className='col-sm-7 part2'>
                        <nav>
                            <ul className='list list-inline'>
                                <li className='list-inline-items'>hello</li>
                            </ul>

                        </nav>
                    </div>
                    <div className='col-sm-2 part3'></div>
                </div>

            </div>

        </div>
    )
}

export default Nav
