import React from "react";
import PopularHotel from "./components/popularHotel";
import Offers from "./components/offers/Offers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Offers />
      <Profile />
    </>
  );
};

export default App;
