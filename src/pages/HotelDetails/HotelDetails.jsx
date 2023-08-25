import React from "react";
import HotelNavigate from "../../components/HotelDetailsComp/HotelNavigate/HotelNavigate";
import Location from "../../components/HotelDetailsComp/Location/Location";
import HotelDesc from "../../components/HotelDetailsComp/HotelDesc/HotelDesc";
import Amenities from "../../components/HotelDetailsComp/amenities";
import AllRooms from "../../components/HotelDetailsComp/all-rooms";
import Review from "../../components/HotelDetailsComp/Review/review";
const HotelDetails = () => {
  var msDiff = new Date("November 30, 2023").getTime() - new Date("November 17, 2023").getTime();    //Future date - current date
var daysTill30June2035 = Math.floor(msDiff / (1000 * 60 * 60 * 24));
console.log(daysTill30June2035);
  return (
    <div>
      <HotelNavigate />
      <HotelDesc />
      <Amenities />
      <AllRooms />
      <Location />
      <Review />
    </div>
  );
};

export default HotelDetails;
