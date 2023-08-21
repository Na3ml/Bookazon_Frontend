import React, { useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/imgs/Group 21.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(true);
  const handleChange = () => {
    console.log(10);
    setClick(!click);
  }
  return (
    <div className="main-div">
      <div className="container nav-bar">
        <div className={click ? "left-click" : "left"}>
          <img src={Logo} alt="" />
        </div>
        <div className={click ? "right" : "right-click"}>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>EN</Link></li>     
            <li><Link to={"/"}>Hotels</Link></li>
            <li><Link to={"/"}>Deals</Link></li>
            <li><Link to={"/"}>Features</Link></li>
            <li><Link to={"/"}>Contact Us</Link></li>
            <li>
                 <Link to={"/signin"}> <button className="nav-btn">Login</button></Link>
            </li>
          </ul>
        </div>
        <div className="mobile-btn " onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
