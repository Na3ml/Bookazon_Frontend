import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineDown} from "react-icons/ai";
import { FaFaceSmile } from "react-icons/fa6";
// import { HiOutlineUser } from "react-icons/hi";
import Logo from "../../assets/imgs/Group 21.png";
// import Smile from "../../assets/imgs/Smile.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleChange = () => {
    setDropdown(!dropdown);
    console.log(10);
  };
  return (
    <nav className="container navbar">
      <Link to={"/"}>
        <img src={Logo} alt="" />
      </Link>
      <ul className="nav-list">
        <li className="nav-item ">
          <Link to={"/"}>Favorites</Link>
        </li>

        <li onClick={handleChange} className="nav-item  drop-down">
          <span>
            EN <AiOutlineDown size={17} style={{ "padding-bottom": "5px" }} />
          </span>
          <div
            className={dropdown ? "drop-down-list" : "drop-down-list-clicked"}
          >
            <ul>
              <li>
                <Link to={"/"} onClick={handleChange}>
                  AR
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <Link to={"/login"}>
            <FaFaceSmile
              size={25}
              style={{
                color: "#FFD700",
                background: "black",
                borderRadius: "50%",
                border: "none",
              }}
            />{" "}
            Ahmed <AiOutlineDown size={18} />
          </Link>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
