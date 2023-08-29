import React from "react";
import HotelNavigate from "../../components/HotelDetailsComp/HotelNavigate/HotelNavigate";
import Location from "../../components/HotelDetailsComp/Location/Location";

import HotelDesc from "../../components/HotelDetailsComp/HotelDesc/HotelDesc";
import Amenities from "../../components/HotelDetailsComp/amenities";
import AllRooms from "../../components/HotelDetailsComp/all-rooms";
import Review from "../../components/HotelDetailsComp/Review/review";

const HotelDetails = () => {
  return (
    <div> 
      <HotelNavigate />
      <HotelDesc />
      <Amenities image="../../assets/imgs/Rectangle 19406.png" title="Our Amenities" className="border-secondary position-absolute"/>
      <AllRooms />
      <Location />
      <Review />
    </div>
  );
};

export default HotelDetails;
