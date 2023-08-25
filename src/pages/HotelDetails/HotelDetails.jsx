import React from "react";
import HotelNavigate from "../../components/HotelDetailsComp/HotelNavigate/HotelNavigate";
import Location from "../../components/HotelDetailsComp/Location/Location";
import HotelDesc from "../../components/HotelDesc/HotelDesc";
import Amenities from "../../components/amenities";
import AllRooms from "../../components/all-rooms";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
const HotelDetails = () => {
  return (
  <div>
    <HotelNavigate/>
    <HotelDesc/>
     <Amenities/>
    <AllRooms/>
    <Location/>
    <Reviews/> 
    <Footer/>
  </div>
  );
};

export default HotelDetails;
