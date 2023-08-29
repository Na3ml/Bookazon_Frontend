import React, { useState } from "react";
import moment from "moment";
import { FaMapMarkerAlt } from "react-icons/fa";
import room from "../../assets/imgs/room1.png";
import { Link } from "react-router-dom";
import GenericButton from "../generic-button";

import "./style.css";
import { Button } from "react-bootstrap";
function ReservationDetail() {
  console.log(new Date().toJSON().slice(0, 10) )
  
  const minDate=new Date().toJSON().slice(0, 10);
  const day=new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
  const checkoutStartDay=day.toJSON().slice(0, 10)
  console.log(checkoutStartDay);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  console.log(value2);
  const [checkin, setCheckin] = useState("November 12, 2023");
  const [checkout, setCheckout] = useState("November 12, 2023");
  const [guests, setGuests] = useState(2);
  const handelCheckin = (e) => {
    setValue1(e.target.value)
    setCheckin(moment(e.target.value).format("LL"));
    console.log(moment(e.target.value).format("LL"));
  };
  const handelCheckout = (e) => {
    setValue2(e.target.value)
    setCheckout(moment(e.target.value).format("LL"));
    console.log(moment(e.target.value).format("LL"));
  };
  const handelGuests = (e) => {
    setValue3(e.target.value)
        setGuests(e.target.value)
  };

  console.log({
    checkin,
    checkout,guests
  });
  window.info={
    checkin,
    checkout,guests
  }
  return (
    <div className=" reservation-detail">
      <div className="d-flex mb-5  " style={{ height: "200px" }}>
        <img src={room} className="rounded" alt="room-img" />
        <div className="p-4 w-100">
          <p className=" me-5 fw-medium fs-20">Deluxe Room</p>
          <p className="d-flex align-items-center ">
            <span className="text-secondary">
              <FaMapMarkerAlt />
            </span>
            <span className="text-gray-600 ms-1 mt-1 ">Cairo, Egypt</span>
          </p>
          <div className="d-flex align-items-center justify-content-between ">
            <div className="d-flex align-items-center ">
              <p className="fs-26 text-secondary me-1 m-0 fw-medium"> $50</p>
              <span className="text-gray-600">per day</span>
            </div>
            <Link to="/" className="text-primary fw-medium fs-20 d-block ">
              Change Room
            </Link>
          </div>
        </div>
      </div>
      <p className=" fs-20 fw-bold ">Please, Fill these information</p>
      <div className="my-4">
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-gray-500 fs-20 fw-medium">Check in</p>
          <div className="date-picker">
            <div className="position-relative  d-flex align-items-center ">
              <input
               value={value1}
                type="date"
                min={minDate}
                className=" input h-100 w-100 pe-2 py-1"
                onChange={(e) => {
                  handelCheckin(e);
                }}
              />
              <p className="date position-absolute fw-medium fs-20 ps-2 py-1">
                {checkin}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-gray-500  fs-20 fw-medium">Check out</p>
          <div className="date-picker">
            <div className="position-relative  d-flex align-items-center ">
              <input
                value={value2}
                type="date"
                min={checkoutStartDay}
                className=" input h-100 w-100 pe-2 py-1"
                onChange={(e) => {
                  handelCheckout(e);
                }}
                
              />
              <p className="date position-absolute fw-medium fs-20 ps-2 py-1">
                {checkout}
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-gray-500  fs-20 fw-medium">Guests</p>
          <select
          value={value3}
            name="guests"
            onChange={(e)=>{handelGuests(e)}}
            style={{ width: "220px" }}
            className="d-flex align-items-center guests fw-medium fs-20 px-2 py-1"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
       
      <Button className="p-0 border-0" disabled={!(value1.length > 0 ) || !(value2.length > 0 ) || !(value3.length > 0 )}>
      <GenericButton
          to="/details"
          className="bg-secondary  text-white "
          text="Apply"
        />
      </Button>
      </div>
    </div>
  );
}
export default ReservationDetail;