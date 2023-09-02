import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import person from "../../assets/imgs/person.png";
import calender from "../../assets/imgs/calender.png";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { PiMapPin } from "react-icons/pi";
import location from "../../assets/imgs/location.png";
import egypt from "../../assets/imgs/egypt.png";
import Rating from "../rating";
import { Link } from "react-router-dom";

function HotelCard(prop) {
  const hoteleDetail = prop.item;
  const id = hoteleDetail.Unique_ID;

  return (
    <div className="ronded mb-4 position-relative ">
      <img
        src={hoteleDetail.main_image}
        className="w-100  rounded-top"
        alt=""
        height={"200px"}
      />
      <div className="pt-4  bg-white position-relative">
        <img
          src={egypt}
          alt=""
          className=" position-absolute rounded-circle  "
          style={{
            width: "100px",
            height: "100px",
            top: "-45px",
            left: "15px",
          }}
        />
        <div className="d-flex align-items-center mt-2" >
          <div className="d-flex align-items-center text-reject">
            <AiOutlineCalendar />
            <span className="ms-2 ">8 Dayes</span>
          </div>
          <div className="d-flex align-items-center ms-4 text-reject">
            <AiOutlineUser />
            <span className="ms-1">1,556 Reviews</span>
          </div>
        </div>
        <div className="d-flex align-items-md-center justify-content-between  py-2 flex-column flex-md-row">
          <p className="fw-bold fs-5 text-dark m-0">
            {hoteleDetail.property_name}
          </p>
          <Rating />
        </div>

        <p className="d-flex align-items-center text-reject mb-2">
          <PiMapPin />
          <span className=" ms-2">{hoteleDetail.country}</span>
        </p>
        <p style={{ fontSize: "15px" }}>
          {hoteleDetail.description.substring(0, 120)}...
        </p>
        {/* <p style={{ fontSize: "15px" }}>
          {hoteleDetail.description.length > 250
            ? ` ${hoteleDetail.description.substring(0, 150)}...`
            : hoteleDetail.description}
        </p> */}

        <div className=" mt-5 d-flex align-items-center">
          <Link
            to="/hotel-details"
            state={hoteleDetail.rooms}
            className="bg-info text-white text-decoration-none rounded px-4 py-2 me-3 d-block"
          >
            Book Now
          </Link>
          <Link
            to="/hotel-details"
            className=" fw-medium text-secondary text-decoration-none d-flex align-items-center  "
          >
            <span>See More</span>
            <MdOutlineKeyboardArrowRight className="fs-5 mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HotelCard;
