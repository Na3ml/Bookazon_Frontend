import React from "react";
import HotelNavigate from "../../components/HotelDetailsComp/HotelNavigate/HotelNavigate";
import Location from "../../components/HotelDetailsComp/Location/Location";
import HotelDesc from "../../components/HotelDesc/HotelDesc";
import Amenities from "../../components/amenities";
import AllRooms from "../../components/all-rooms";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import ReservationSummary from "../../components/reservation-summary";
import Profile from "../../components/profile/Profile";
import Confirmition from "../../components/confirmition";
import Stpes from "../../components/stpes";
import Details from "../Details";
import Payment from "../Payment";
import Confirmation from "../Confirmation";
import ReservationDetail from "../../components/reservation-detail";
const HotelDetails = () => {
  var msDiff = new Date("November 30, 2023").getTime() - new Date("November 17, 2023").getTime();    //Future date - current date
var daysTill30June2035 = Math.floor(msDiff / (1000 * 60 * 60 * 24));
console.log(daysTill30June2035);
  return (
  <div>

     <HotelNavigate/>
    <HotelDesc/>
    <Amenities/>
    <AllRooms/>
    <Location/>
    <Reviews/> 
     <Footer/> 
     <ReservationSummary/>
    <Profile/>
    {/* <Confirmition/>
     <Stpes/>
  <Details/>
    <Payment/>
    <Confirmation/>
    <ReservationDetail/> */}

  </div>
  );
};

export default HotelDetails;
