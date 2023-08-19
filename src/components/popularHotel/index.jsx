import React from "react";
import img from "../../assets/imgs/hotel.jpeg";
import { RiArrowRightSLine, RiFontSize } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import Rating from "../rating";
function PopularHotel() {
  return (
    <div className="rounded mb-4 d-flex flex-column flex-md-row  justify-content-between px-0 " style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'}}>
      <img src={img} className="rounded-top" alt=""/>
     <div className="p-4">
        <div className="d-flex align-items-center">
        <h4 className="text-secondary me-5">Hotel Gasteresidenz pelikanviertel</h4>
        <BsHeart/>
        </div>
        <div className="d-flex  align-items-center mb-2">
        <Rating />
        <span className="ms-3 text-reject" >Hotel</span>
      </div>
        <div className="d-flex d-md-block  flex-wrap">
        <p className="d-flex align-items-center ">
            <FaMapMarkerAlt />  <span className="text-reject ms-2">Cairo</span>
          </p>
          <p className="me-4">8.2- Very good (690)</p>
        </div>
      </div>
      <div  className="rounded px-3 pt-3 pb-3 me-md-5 my-4 bg-success">
        <div className="d-flex align-items-center justify-content-between  flex-wrap">
          <p className="fs-4" >Gasteresidenz hotels</p>
          <div className="d-flex  ms-md-5 ms-0 border-danger border mb-3 ">
            <span className="h-100 text-white bg-danger px-1 py-1">20%</span>
            <p className="bg-white px-3 py-1 mb-0 ">Less than usual</p>
          </div>
        </div>

        <p > <MdOutlineDone className="fw-bold"/> Pay at the property</p>
        <div className="d-flex align-items-center justify-content-between  flex-wrap">
          <p className="text-primary fw-bold">260$</p>
          <Button className="rounded px-2   bg-primary border-primary ms-md-5 ms-0">
            View Deal <RiArrowRightSLine />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default PopularHotel;
