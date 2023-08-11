import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {  AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import {FaFaceSmile} from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";
import Logo from "../../assets/imgs/Group 21.png";
import Smile from "../../assets/imgs/Smile.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="container navbar">
      <Link to={"/"}><img src={Logo} alt="" /></Link>
      <ul className="nav-list">
        
        <li className="nav-item "> 
          <Link to={"/"}>Favorites</Link>
        </li>
        <li className="nav-item  drop-down" 
        onMouseEnter={()=>setDropdown(true)}> 
          <div><AiOutlineDown size={18}/>  USE</div>
         {dropdown && <div className="drop-down-list">
          <ul>
          <li><Link to={"/"}>EGP</Link></li>
          <li><Link to={"/"}>SAR</Link></li>
          <li><Link to={"/"}>EUR</Link></li>
          </ul>
          </div>}
        </li> 
        <li className="nav-item  drop-down" 
        onMouseEnter={()=>setDropdown(true)}
        onMouseLeave={()=>setDropdown(false)}> 
          <Link to={"/"}>
            <AiOutlineDown size={18}/>  EN</Link>
            <div className="drop-down-list">
          <ul>
          <li><Link to={"/"}>AR</Link></li>
          </ul>
          </div>
        </li>
        <li className="nav-item">
        <Link to={"/login"}>
        <FaFaceSmile size={25} style={{"color":"#FFD700", "background":"black","borderRadius":"50%","border":"none"}}/> Ahmed <AiOutlineDown size={18}/></Link>
        </li>
        
      </ul>
      <div className="mobile-btn ">
        <AiOutlineMenu size={25}/>
      </div>
    </nav>
  );
};

export default Navbar;
