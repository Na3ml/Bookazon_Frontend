import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import room from "../../assets/imgs/room1.png";
import { Link } from "react-router-dom";
function ReservationSummary() {
  console.log(window.info);
  const info=window.info
  
  var diff = new Date(info.checkin).getTime() - new Date(info.checkout).getTime(); 
  // var diff =checkin>checkout ?  new Date(info.checkin).getTime() - new Date(info.checkout).getTime()
  // :new Date(info.checkout).getTime() - new Date(info.checkin).getTime(); 
   
  var days = Math.floor((diff>0 ? diff :diff* -1) / (1000 * 60 * 60 * 24));
   const price=days * 50
  console.log(days);
  return (
    <div className="mt-5 pt-5 ">
      <p
        className="bg-white text-center py-3  rounded  fw-bold fs-5 "
        style={{ boxShadow: `0px 4px 4px 0px rgba(222, 222, 222, 0.25)` }}
      >
        Reservation Summary- <span className="text-secondary">#54215</span>
      </p>
      <div className="d-flex mb-5 " style={{ height: "200px" }}>
        <img src={room} className="rounded" alt="room-img" />
        <div className="p-4 w-100 pe-0">
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
            <Link to="/" className="text-primary fw-medium  d-block ">
              Change Room
            </Link>
            
          </div>
        </div>
    
      </div>
      <div className="my-4">
            <div className="d-flex align-items-center justify-content-between">
                <p className="text-gray-500 fs-20 fw-medium">Check in</p>
                <p className=" fw-medium fs-20">{info.checkin}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p className="text-gray-500  fs-20 fw-medium">Check out</p>
                <p className="fw-medium fs-20">{info.checkout}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p className="text-gray-500  fs-20 fw-medium">Guests</p>
                <p className=" fw-medium fs-20">{info.guests}</p>
            </div>
        </div>
        <div className="py-3 border-bottom">
            <div className="d-flex align-items-center justify-content-between">
                <p className="text-gray-500 fs-20 fw-medium">{days} Nights</p>
                <p className=" fw-medium fs-20">{price}$</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p className="text-gray-500  fs-20 fw-medium">Taxes</p>
                <p className="fw-medium fs-20">57$</p>
            </div>

        </div>
        <div className="d-flex align-items-center justify-content-between py-3">
                <p className="text-gray-500 fs-20 fw-medium">Total</p>
                <p className=" fw-medium fs-20"> <span className="text-primary fw-bold me-2">USD</span>{price + 57}$</p>
            </div>
    </div>
  );
}
export default ReservationSummary;
