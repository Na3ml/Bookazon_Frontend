import React from "react";
// import author from "../../assets/imgs/author.png";
// import hotel1 from "../../assets/imgs//hotel1.png";
// import hotel2 from "../../assets/imgs/hotel2.png";
import { BsFillStarFill } from "react-icons/bs";
import "./Hotel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { hotelData } from "./hoteldata";

function Hotel() {
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
   <div className="bestHotel position-relative">
     <OwlCarousel {...options} className="owl-theme">
      {hotelData.map((item, index) => {
        return (
          <div className="about">
            <div className="container">
              <div className="info">
                <h1>{item.title}</h1>
                <p>
                  {item.desc}
                  <p>{item.info}</p>
                </p>
                <div className="author">
                  <img src={item.authorimg} alt="author" />
                  <div className="name">
                    <p className="manager">{item.managerdesc}</p>
                    <p>{item.manager}</p>
                  </div>
                </div>
              </div>
              <div className="imgs">
                <div className="circle"></div>
                <div className="line-img"></div>
                <img src={item.img1} alt="" className="hotel1" />
                <img src={item.img2} alt="" className="hotel2" />
                <div className="hotelrate">
                  <span className="rating">0.5</span>
                 
                  <p className="d-flex mb-1">
                    <BsFillStarFill
                      size={25}
                      style={{ color: "rgba(126, 87, 194, 1)" }}
                    />
                    <BsFillStarFill
                      size={25}
                      style={{ color: "rgba(126, 87, 194, 1)" }}
                    />
                    <BsFillStarFill
                      size={25}
                      style={{ color: "rgba(126, 87, 194, 1)" }}
                    />
                    <BsFillStarFill
                      size={25}
                      style={{ color: "rgba(126, 87, 194, 1)" }}
                    />
                    <BsFillStarFill
                      size={25}
                      style={{ color: "rgba(126, 87, 194, 1)" }}
                    />
                  </p>
                
                  <span className="reviews-count">2000, Reviews</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
   </div>
  );
}

export default Hotel;
