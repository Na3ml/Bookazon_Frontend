/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCalendarWeek, BsPerson } from 'react-icons/bs'
import { Stack , Avatar} from '@mui/material'


import './Search.css';


const Book = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openOptions, setOpenOptions] = useState(false);
  const [options,setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handelOption = (name,operation) => {
    setOptions((prev)=>{
      return{
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  }
  return (

  <div className='search'>
    <div className='home'>
      <span className='title'>
        <h1 className='text-white font-bold mr-10'>Enjoy Your Dream <br />  Vacation</h1>
      </span>


        <div className="headerSearch">
          <div className="headerSearchItem">
            <HiOutlineLocationMarker className='headerIcon1'/>
            <input type="search" placeholder='Where To?' className='headerSearchInput'/>
            <span className='result'>Egypt</span>
          </div>
          <div className="headerSearchItem2">
            <BsCalendarWeek className='headerIcon' />
            <span className='headerSearchText'>
              <span className='check text-white'>
                Check in 
              </span>
              <input type="date" className="date" id="" size={16}/>
            </span>
          </div>
          <div className="headerSearchItem2">
          <BsCalendarWeek className='headerIcon'/>
            <span className='headerSearchText'>
              <span className='check text-white'>
                Check out
              </span>
              <input type="date" className="date" id="" size={16}/>
            </span>
          </div>
          <div className="headerSearchItem3">
            <BsPerson className='headerIcon2' />
            <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText1'>
              {`${options.adult} adult  ${options.children}  children  ${options.room} room `} </span>
              {openOptions && <div className='options'>
                <div className='optionItem'>
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button disabled={options.adult <= 1} className='optionCounterButton' onClick={()=>handelOption("adult", "d")}>-</button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button className='optionCounterButton' onClick={()=>handelOption("adult", "i")}>+</button>
                  </div>
                </div>
                <div className='optionItem'>
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button disabled={options.children <= 1} className='optionCounterButton' onClick={()=>handelOption("children", "d")}>-</button>
                    <span className='optionCounterNumber'>{options.children}</span>
                    <button className='optionCounterButton' onClick={()=>handelOption("children", "i")}>+</button>
                  </div>
                </div>
                <div className='optionItem'>
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button disabled={options.room <= 1} className='optionCounterButton' onClick={()=>handelOption("room", "d")}>-</button>
                    <span className='optionCounterNumber'>{options.room}</span>
                    <button className='optionCounterButton' onClick={()=>handelOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>}
          </div>
          <div className="headerSearchItem1">
              <a href='#' className='headerBtn'>Find Now</a>
          </div>
        </div>
        <div className="avatar">
          <Stack spacing={1}>
            <Stack direction='row' spacing={-1}>
              <Avatar sx={{ bgcolor: 'primary.light' }}>FE</Avatar>
              <Avatar sx={{ bgcolor: 'success.light' }}>BE</Avatar>
              <Avatar sx={{ bgcolor: 'primary.light' }}></Avatar>
              <Avatar sx={{ bgcolor: 'success.light' }}>FE</Avatar>
              <Avatar sx={{ bgcolor: 'primary.light' }}>BE</Avatar>
              <Avatar src=''>+</Avatar>
            </Stack>
          </Stack>
          <p>2,500 people booked in last 24 hours</p>
        </div>
    </div>
  </div>
  );
};

export default Book;