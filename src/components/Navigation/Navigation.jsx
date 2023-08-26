import React, { useContext, useState } from "react";
import "./Navigation.css";
import Logo from "../../assets/imgs/Group 21.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import GenericButton from "../generic-button";
import { AuthContext } from "../../Context/AuthContext";



const Navigation = () => {
  const {userData} = useContext(AuthContext);
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
          <ul className="fs-26 fw-bold">
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>EN</Link></li>     
            <li><Link to={"/hotels"}>Hotels</Link></li>
            <li><Link to={"/"}>Deals</Link></li>
            <li><Link to={"#features"}>Features</Link></li>
            <li><Link to={"/"}>Contact Us</Link></li>


          {userData ? 
          <> 
            <li>
                 <GenericButton  
                 to="/profile"
                  text="Profile"
                   className="text-white bg-secondary border-secondary border-1 border">
                   </GenericButton>
            </li>
             </>
                  
      
          : <>
             <li>
                 <GenericButton 
                 to="/signin"
                  text="Login"
                   className="text-white bg-secondary border-secondary border-1 border">
                   </GenericButton>
            </li>
          </>
          
          }

            
            
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
