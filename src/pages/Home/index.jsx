import React from "react";
import Packages from "../../components/packages";
import Features from "../../components/features";
import Book from "../../components/Book";
import Hotel from "../../components/Hotel-slider/Hotel";
import Deals from "../../components/Deals/Deals";
import Reviews from "../../components/Reviews/Reviews";
import AllHotels from "../../components/all-hotels";

function Home() {
  return (
    <div>
      <Book /> 
      <Hotel />
      <AllHotels />
      <Deals /> 
      <Packages />
      <Features />
      <Reviews /> 
    </div>
  );
}
export default Home;
