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
      .get("https://ayarabia.github.io/jsonData/courses.json")
      .then(function (response) {
        // handle success
        setData(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
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
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <Container className="all-hotels mb-5" id="hote-list">
    <div className="text-center my-5">
    <h2 className="mb-3">Find Your Best Destenation</h2>
      <p className="lh-sm">Experience unparalleled luxury  and impeccable service at our upcoming hotel destination, where indulgence <pre></pre> and relaxation seamlessly blend to create a truly memorable stay.</p>
    </div>
      {data.length &&(
      <OwlCarousel {...options} className="owl-theme">
        { data.map((item ,index) => {
          return (
            // <div key={index}>
                <HotelCard item={item} />
            // </div>
          );
        })}
      </OwlCarousel>
)}
    </Container>
  );
}
export default AllHotels;
