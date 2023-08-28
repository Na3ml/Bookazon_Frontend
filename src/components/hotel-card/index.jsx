import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import person from "../../assets/imgs/person.png";
import calender from "../../assets/imgs/calender.png";
import {AiOutlineCalendar ,AiOutlineUser} from 'react-icons/ai'
import { PiMapPin } from "react-icons/pi";
import location from "../../assets/imgs/location.png";
import Rating from "../rating";
import { Link } from "react-router-dom";

function HotelCard(prop) {
  const hoteleDetail = prop.item;
  return (
    <div className="ronded mb-4 position-relative ">
      <img src={hoteleDetail.cover} className="w-100  rounded-top" alt="image" />
      <div className="pt-4  bg-white position-relative">
        <img
          src={hoteleDetail.instructor}
          alt="image"
          className=" position-absolute rounded-circle border-4 border-white border "
          style={{ width: "60px", height: "60px", top: "-35px", left: "20px" }}
        />
        <div className="d-flex align-items-center mt-2">
          <div className="d-flex align-items-center text-reject">
           <AiOutlineCalendar/>
            <span className="ms-2 ">8 Dayes</span>
          </div>
          <div className="d-flex align-items-center ms-4 text-reject">
             <AiOutlineUser/>
            <span className="ms-1">1,556 Reviews</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between py-2">
          <p className="fw-bold fs-5 text-dark m-0">Switzerland</p>
          <Rating />
        </div>
        <p className="d-flex align-items-center text-reject mb-2">
          <PiMapPin/>
          <span className=" ms-2">  Cairo</span>
        </p>
    
        <p style={{ fontSize: "15px" }}>
          Nam exercitationem commodi et ducimus quia in dolore animi sit
          mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium internos.
        </p>
        <div className=" mt-5 d-flex align-items-center">
          <Link
            to="/hotel-details"
            className="bg-info text-white text-decoration-none rounded px-4 py-2 me-3 d-block"
          >
            Book Now
          </Link>
          <Link
            to="/hotel-details"
            className=" fw-medium text-secondary text-decoration-none d-flex align-items-center  "
          >
            <span>
              See More
            </span>
              <MdOutlineKeyboardArrowRight className="fs-5 mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HotelCard;