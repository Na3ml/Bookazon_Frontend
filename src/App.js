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
          <Route path="/payment" element={<PaymentDetails  />} />
          <Route path="/profile" element={<Profile  />} />
          <Footer/> 

        </Routes>
   
      </BrowserRouter>
    </>
  );
};

export default App;
