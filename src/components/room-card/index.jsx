import React ,{useState} from "react";
import room1 from "../../assets/imgs/room1.png";
import { HiOutlineUsers } from "react-icons/hi";
import StarsRating from "react-star-rate";
import GenericButton from "../generic-button";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import "./style.css"
import { info } from "sass";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function RoomCard(props) {
const [value, setValue] = useState(0);
  // console.log(props.info);
  const room=props.item
  return (
    <div className="rounded position-relative  room-card mb-3" >
      <img src={room.featured_photo} className="rounded-top w-100 h-100" alt="room" />
      <div
        style={{ background: "rgba(0, 0, 0, 0.64)" }}
        className=" position-absolute bottom-0 start-0 w-100 px-3 py-3"
      >
        <div className="d-flex align-items-center justify-content-between flex-md-row flex-column mb-1">
          <p className="fw-normal text-white fs-20 mb-0">{room.type} Room</p>
          <StarsRating
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        classNamePrefix="rating"
      />
        </div>
        <p className="d-flex align-items-center mb-3 justify-content-md-start justify-content-center mt-md-0 mt-3">
         <span className="text-primary me-1"> <HiOutlineUsers/></span>
         <span className="text-white ">2 Persons</span>
        </p>
    <div className="mt-1 d-flex align-items-center justify-content-between flex-md-row flex-column ">
    <div className="d-flex align-items-center ">
      <p className="fs-26 text-primary me-1 m-0"> {room.price}$</p>
      <span className="text-white">per/night</span>
     </div>
     
   
    <GenericButton to="room-details" state={{images:room.images,info:props.info,price:room.price}}
     text="Book Now"
      className="text-white border-white border-1 border my-3 my-md-0" 
      ></GenericButton>
    </div>


      </div>
    </div>
  );
}
export default RoomCard;
