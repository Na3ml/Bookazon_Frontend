import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navigation from "./components/Navigation/Navigation";
import HotelDetails from "./pages/HotelDetails/HotelDetails";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hotels" element={<HotelDetails />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
