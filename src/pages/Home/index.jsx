import React from "react";
import AllHotels from "../../components/all-hotels";
import Packages from "../../components/packages";
import Features from "../../components/features";
import Book from "../../components/Book";
import Hotel from "../../components/Hotel-slider/Hotel";
import Deals from "../../components/Deals/Deals";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";


function Home() {
  return (
    <div>
      <AllHotels />
      <Packages />
      <Features />
      <Hotel />
      <Deals />
      <Reviews />
      <Footer />
    </div>
  );
}
export default Home;
