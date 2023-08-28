import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation/Navigation";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import PaymentDetails from "./components/paymentCopm/paymentDetails/PaymentDetails";
import Profile from "./components/profile/Profile";
import Footer from "./components/Footer/Footer";
import RoomDetails from "./pages/RoomDetails";
import Details from "./pages/Details"
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";

const App = () => {
  
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/payment" element={<PaymentDetails  />} /> */}
          <Route path="/profile" element={<Profile  />} />
          <Route path="/hotel-details/room-details" element={<RoomDetails/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
         </Routes>
         <Footer/> 
      </BrowserRouter>
    </>
  );
};

export default App;
