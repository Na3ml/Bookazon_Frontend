import React from "react";
import PopularHotel from "./components/popularHotel";
import Offers from "./components/offers/Offers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login/Login.jsx";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
};

export default App;