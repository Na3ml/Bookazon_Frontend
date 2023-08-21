/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCalendarWeek, BsPerson } from 'react-icons/bs'
import { Stack , Avatar} from '@mui/material'
import Logo from '../../assets/imgs/home.png'

import './Search.css';


const index = () => {

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
    <div>
      <div className='bg-cover home h-screen'>
        <div className='' >
          <span className='flex'>
            <h1 className='text-white md:text-7xl md:mt-40 font-mono my-24 mt-10 xl:py-20 xl:ml-48 text-bolder ml-10 '>Enjoy Your Dream <br /> Vacation</h1>
          </span>
            <div className="bg-purple-700/70  xl:w-[880px] xl:flex md:w-96 2xl:h-20 md:ml-48 p-2 ml-12 w-72 justify-center">
              <div className='xl:flex text-center ml-6 xl:ml-0' >
                <div className="flex p-2">
                  <HiOutlineLocationMarker className='mt-2 w-9 h-5 text-white ml-1 md:ml-5 2xl:ml-0'/>
                  <input type="search" placeholder='Where To?' className='bg-purple-800/0 w-20 h-5 ml-4 2xl:ml-0 mt-2 text-white placeholder-white'/>
                </div>
                <div className="flex md:ml-4 md:p-0 p-2">
                  <BsCalendarWeek className='ml-1 mt-2 w-9 h-5 text-white' />
                  <span className='grid'>
                    <span className='text-white h-5 mt-1 '>
                      Check in 
                    </span>
                    <input type="date" className="bg-purple-800/0 h-6 mt-2 w-28 ml-2 2xl:ml-0 text-white" id="" size={16}/>
                  </span>
                </div>
                <div className="flex md:ml-4 p-2">
                <BsCalendarWeek className='ml-1 mt-2 w-9 h-5 text-white'/>
                  <span className='grid'>
                    <span className='text-white h-5 mt-1'>
                      Check out
                    </span>
                    <input type="date" className="bg-purple-800/0 h-6 mt-2 w-28 ml-2 2xl:ml-0 text-white" id="" size={16}/>
                  </span>
                </div>
                <div className="flex p-2">
                  <BsPerson className='ml-1 2xl:ml-0 mt-2 w-9 h-5 md:ml-5 text-white' />
                  <span onClick={()=>setOpenOptions(!openOptions)} className='text-white mt-2 md:w-30'>
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
              </div>
              <div className="w-40 h-10 bg-orange-400 p-2 mt-2 ml-12 md:ml-24 xl:ml-0 text-center rounded-md">
                  <a href='1' className='text-white font-mono  no-underline'>Find Now</a>
              </div>
            </div>
            <div className="text-white md:mt-44 mt-5 ml-12 xl:ml-48 md:flex">
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
              <p className='ml-10'>2,500 people booked in last 24 hours</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;