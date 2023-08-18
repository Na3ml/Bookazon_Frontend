import React from "react";
import AllHotels from "../../components/all-hotels";
import Packages from "../../components/packages";
import Features from "../../components/features";

function Home() {
  return (
      <div>
    <AllHotels/>  
    <Packages/> 
    <Features/>
      </div>
  );
}
export default Home;