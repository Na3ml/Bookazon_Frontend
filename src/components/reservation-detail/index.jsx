import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import room from "../../assets/imgs/room1.png";
import { Link } from "react-router-dom";
import GenericButton from "../generic-button";
function ReservationDetail() {
  return (
    <div className="w-50 pt-5 mt-5">
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
      <p className="text-gray-500  fs-20 fw-bold">
        Please, Fill these information
      </p>
      <div className="my-4">
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-gray-500 fs-20 fw-medium">Check in</p>
          <p className=" fw-medium fs-20">November 12, 2023</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-gray-500  fs-20 fw-medium">Check out</p>
          <p className="fw-medium fs-20">November 17, 2023</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-gray-500  fs-20 fw-medium">Guests</p>
          <select name="guests" className="">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <GenericButton
          to=""
          className="bg-secondary  text-white "
          text="Apply"
        />
      </div>
    </div>
  );
}

export default ReservationDetail;
