import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./components/login/Login";
import Navigation from "./components/Navigation/Navigation";
import Deals from "./components/Deals/Deals";
import Reviews from "./components/Reviews/Reviews";

const App = () => {
  return (
    <>
      <Navigation />
      <Deals />
      <Reviews />
    </>
  );
};

export default App;
