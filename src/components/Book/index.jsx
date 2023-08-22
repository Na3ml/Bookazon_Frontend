/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCalendarWeek, BsPerson } from 'react-icons/bs'
import { Stack , Avatar} from '@mui/material'
import Axios from 'axios';

import './Search.css';


const index = () => {


  const url =""
  const [data,setData] = useState({
    location: "",
    datein: "",
    dateout: "",
    geusts: "",
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      location: data.location,
      datein: data.datein,
      dateout: data.dateout,
      geusts: data.geusts,
    })
    .then(res=>{
      console.log(res.data)
    })
  }
  function handel(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }


  return (
    <div>
      <div className='home'>
        <div className='container' >
          <span className='d-flex'>
            <h1 className='text-white  '>Enjoy Your Dream <br /> Vacation</h1>
          </span>
            <div className="headerSearch ">
              <form onSubmit={(e) => submit(e)} className='form-search' >
                <div className="d-flex location">
                  <HiOutlineLocationMarker className='icon text-white'/>
                  <input type="search" onChange={(e) => handel(e)} placeholder='Where To?' id="location" className='input1' />
                </div>
                <div className="check d-flex">
                  <BsCalendarWeek className='icon1 text-white' />
                  <span className='d-grid'>
                    <span className='text-white'>
                      Check in 
                    </span>
                    <input type="date" onChange={(e) => handel(e)} id="datein" className="input2 text-white" size={16}/>
                  </span>
                </div>
                <div className="check d-flex p-2">
                <BsCalendarWeek className='icon1 text-white'/>
                  <span className='d-grid'>
                    <span className='text-white h-5 mt-1'>
                      Check out
                    </span>
                    <input type="date" onChange={(e) => handel(e)} id="dateout" className="input2 text-white"  size={16}/>
                  </span>
                </div>
                <div className="check d-flex p-2">
                  <BsPerson className='icon1 text-white' />
                  <div className='d-grid'>
                    <label htmlFor="gaustes" className='text-white mt-1'>Geusts</label>
                      <select name="" onChange={(e) => handel(e)} id="geusts" className='select text-white'>
                        <option value="1">1 Geusts</option>
                        <option value="2">2 Geusts</option>
                        <option value="3">3 Geusts</option>
                        <option value="4">4 Geusts</option>
                        <option value="5">5 Geusts</option>
                      </select>
                  </div>
                </div>
                <button type='submit'  className="text-center text-white">
                  Find Now
                </button>
              </form>
              
            </div>
            <div className="text-white">
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
              <p className=''>2,500 people booked in last 24 hours</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;