import React from "react";
import room1 from "../../assets/imgs/room1.png";
import room2 from "../../assets/imgs/room2.png";
import room3 from "../../assets/imgs/room3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
function ImageSlider() {
  const data = [room1, room2, room3, room1];
  const options = {
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: true,
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
        items: 1,
      },
    },
  };
  return (
    <div className=" mt-5 image-slider px-5">
      {data.length && (
        <OwlCarousel {...options} className="owl-theme">
          {data.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img
                  src={item}
                  alt={item}
                  className="w-100 h-100"
                />
              </div>
            );
          })}
        </OwlCarousel>
      )}
    </div>
  );
}

export default ImageSlider;
