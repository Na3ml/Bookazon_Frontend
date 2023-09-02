import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import HotelCard from "../hotel-card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";


function AllHotels() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch data
    axios
      // .get("https://bookazon.tadafoq.com/api/properties")
    .get("https://ayarabia.github.io/jsonData/properties.json")
      .then(function (response) {
        // handle success
        setData(response.data.data);
        // localStorage.setItem("properties", JSON.string(data))
       // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  // console.log(data);
  const options = {
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <Container className="all-hotels my-5" id="hote-list">
    <div className="text-center my-5">
    <h2 className="mb-3">Find Your Best Destenation</h2>
      <p className=" des">Experience unparalleled luxury  and impeccable service at our upcoming hotel destination, where <pre></pre> indulgence  and relaxation seamlessly blend to create a truly memorable stay.</p>
    </div>
      {data.length &&(
      <OwlCarousel {...options} className="owl-theme">
        { data.map((item ,index) => {
          return (
            <div key={index} className="px-4">
                <HotelCard item={item}  />
            </div>
          );
        })}
      </OwlCarousel>
)}
    </Container>
  );
}
export default AllHotels;
