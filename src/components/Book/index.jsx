/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsCalendarWeek, BsPerson } from 'react-icons/bs'
import { Stack , Avatar} from '@mui/material'
import GenericButton from "../generic-button"
import Axios from 'axios';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import './Search.css';


const index = () => {


  const url ="https://bookazon.tadafoq.com/api/home/search"
  const [data,setData] = useState({
    city: "",
    check_in: "",
    check_out: "",
    total_guests: "",
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      city: data.city,
      check_in: data.check_in,
      check_out: data.check_out,
      total_guests: data.total_guests,
    })
    .then(res=>{
      console.log(res.data)
      toast.success(data.message, {
        duration: 4000,
        className: "text-secondary px-4 fw-bolder",
        iconTheme: {
          primary: "#ff9900",
        },
      });
    }).catch((error)=>{
        console.log(error.response.data.message)
        toast.error(error.response.data.message, {
          duration: 4000,
          className: "text-danger px-4 fw-bolder",
        });
      
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
        <div className='container'>
          <span className='d-flex'>
            <h1 className='text-white'>Enjoy Your Dream <br className="br-s"/> Vacation</h1>
          </span>
            <div className="headerSearch ">
              <form method='post' onSubmit={(e) => submit(e)} className='form-search' >
                <div className="d-flex location">
                  <HiOutlineLocationMarker className='icon text-white'/>
                  <input type="search" onChange={(e) => handel(e)} placeholder='Where To?' id="city" className='input1 text-white' />
                </div>
                <div className="check d-flex align-items-center p-2">
                  <BsCalendarWeek className='icon1 text-white' />
                  <div>
                  <span className='d-grid'>
                    <span className='text-white h-5 mt-1'>
                      Check in 
                    </span>
                    <input type="date" onChange={(e) => handel(e)} id="check_in" className="input2 text-white" size={16}/>
                  </span>
                  </div>
                </div>
                <div className="check d-flex p-2">
                <BsCalendarWeek className='icon2 text-white'/>
                  <span className='d-grid'>
                    <span className='text-white h-5 mt-1'>
                      Check out
                    </span>
                    <input type="date" onChange={(e) => handel(e)} id="check_out" className="input2 text-white"  size={16}/>
                  </span>
                </div>
                <div className="check d-flex p-2">
                  <BsPerson className='icon3 text-white' size={22}/>
                  <div className='d-grid'>
                    <label htmlFor="gaustes" className='text-white mt-1'>Geusts</label>
                      <select name="" onChange={(e) => handel(e)} id="total_guests" className='select text-white'>
                        <option className='' value="1">1 Geusts</option>
                        <option value="2">2 Geusts</option>
                        <option value="3">3 Geusts</option>
                        <option value="4">4 Geusts</option>
                        <option value="5">5 Geusts</option>
                      </select>
                  </div>
                </div>
                {/* <button  type='submit'  className="btn-find btn text-center text-white"> */}
                {/* <button  type='submit'  className="text-white border-primary bg-primary">
                  <GenericButtonutton to="/search-result" 
        text="Find Now"
      className="text-white my-md-0" 
      ></GenericButtonutton>
                </button> */}
                <Link to="/search-result"  >
                <button  type='submit'  className="btn-find btn text-center text-white">
                Find Now

                </button>
                </Link>
     
              </form>
              
            </div>
            <div className="user-avatar text-white mt-3">
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