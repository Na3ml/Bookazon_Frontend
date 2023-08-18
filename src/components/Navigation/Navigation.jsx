import React, { useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/imgs/Group 21.png";
import { AiOutlineMenu } from "react-icons/ai";

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
            <li><a href="/">Home</a></li>
            <li><a href="/">EN</a></li>     
            <li><a href="/">Hotels</a></li>
            <li><a href="/">Deals</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Contact Us</a></li>
            <li>
                 <a href="/"> <button className="nav-btn">Login</button></a>
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
