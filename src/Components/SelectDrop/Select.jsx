import React, { useState } from 'react'
import '../SelectDrop/Select.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import { ClickAwayListener } from '@mui/material'




function Select({data,placeholder,icon}) {
    const [isOpenSelect,setisOpenSelect]=useState(true)
    const [Selectedindex,setSelectedindex]=useState(0)
    const [Selecteditem,setSelecteditem]=useState(placeholder)

    const [listdata,setlistdata]=useState(data)
    const [listdata2,setlistdata2]=useState(data)
    function CloseSelect(index,cate){
        setSelecteditem(cate)
        setSelectedindex(index)
        setisOpenSelect(!isOpenSelect)
    }
    const filterList=(e)=>{
       const keyword=e.target.value.toLowerCase()
       let n=keyword.length;
       const list=listdata2.filter((item)=>{
        return item.slice(0,n).toLowerCase().includes(keyword)
       })
       const list2=list.filter((item,index)=>{
            return list.indexOf(item)===index
       })
       setlistdata(list2)
    }
    return (
        <> <ClickAwayListener onClickAway={()=>setisOpenSelect(false)}>
           <div className='selectDropwrapper cursor position-relative'>
            {icon}
            <span className='openSelect' onClick={()=>{setisOpenSelect(!isOpenSelect)}}> {Selecteditem} <KeyboardArrowDown className='arrow'/></span>
            { isOpenSelect===true &&
        <div className='selectDrop'>
            <div className='searchfield'>
                <input type="text"  placeholder='Search here...'onChange={filterList}/>
              
            </div>

            <ul className='searchResults'>
                {
                    listdata.map((item,index)=>{
                        return(
                                <li onClick={()=>CloseSelect(index,item)} className={`${Selectedindex=== 0? 'active' : '' }`}>{item}</li>
                              )     } )
                }
              
            </ul>
        </div>}
        {/* <span className='selectpipe'>|</span> */}
        </div>
        </ClickAwayListener>
        </>
    )
}

export default Select
