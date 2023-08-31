import React, { useContext, useState } from "react";
import "./Navigation.css";
import { HashLink  } from "react-router-hash-link";
import Logo from "../../assets/imgs/Group 21.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import GenericButton from "../generic-button";
import { AuthContext } from "../../Context/AuthContext";
import Profile from "../../assets/imgs/profile.jpeg";


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
        <div className={click ? "right-click":"right" }>
          <ul className="fs-26 fw-bold">
            <li onClick={handleChange}><Link to={"/"}>Home</Link></li>
            <li onClick={handleChange}><Link to={"/"}>EN</Link></li> 


         
            <li onClick={handleChange}><HashLink to="/#hotel">Hotels</HashLink></li>
            <li onClick={handleChange} ><HashLink to="/#deals">Deals</HashLink></li>
            <li onClick={handleChange}><HashLink to={"#features"}>Features</HashLink></li>
            <li onClick={handleChange}><HashLink to={"/#contact-us"}>Contact Us</HashLink></li>

            {userData ? 
              <> 

          <li  onClick={handleChange} style={{padding: "0"}}>

              <Link to="/profile">
                <img className="nav-profile-img" src={Profile} alt="" />
              </Link>
            </li>
             </>
          : <>
             <li onClick={handleChange}>
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