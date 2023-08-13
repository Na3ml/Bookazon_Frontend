/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { FaSearch , FaCalendarDay,  } from 'react-icons/fa'
import { FaDisplay, FaPerson } from 'react-icons/fa6'
import { RxCross1 ,RxCaretLeft ,RxCaretRight} from 'react-icons/rx'
import './Search.css'


const index = () => {

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
  <div className='container'>
      <h1>Where do you want to go?</h1>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaSearch className='headerIcon' />
            <input type="text" placeholder='Going To' className='headerSearchInput'/>
            <RxCross1 className='headerIcon1'/>
          </div>
          <div className="headerSearchItem">
            <FaCalendarDay className='headerIcon' size={30}/>
            <span className='headerSearchText'>
              <span className='check'>
                Check in 
                <input type="date" className="date" id="" size={16}/>
              </span>
            </span>
            <span>
              
            </span>
          </div>
          <div className="headerSearchItem">
            <FaCalendarDay className='headerIcon' size={30}/>
            <span className='headerSearchText'>
              <span className='check'>
                Check out 
                <input type="date" className="date" id="" size={16}/>
              </span>
            </span>
            <span >
            
            </span>
          </div>
          <div className="headerSearchItem">
            <FaPerson className='headerIcon'/>
            <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText'>
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
              <a href='#' className='headerBtn'>Search</a>
          </div>
        </div>
    </div>
  );
};

export default index;