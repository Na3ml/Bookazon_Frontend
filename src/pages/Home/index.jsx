import React from "react";
import AllHotels from "../../components/all-hotels";
import Packages from "../../components/packages";
import Features from "../../components/features";
import Book from "../../components/Book/index";
import Review from "../../components/Review/review";

function Home() {
  return (
      <div>
        <Book />
        <Review />
        <AllHotels/>  
        <Packages/> 
        <Features/>
      </div>
  );
}
export default Home;