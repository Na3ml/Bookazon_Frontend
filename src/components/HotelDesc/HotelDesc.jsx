import React from "react";
import author from "../../assets/imgs/author.png";
import hotelimg1 from "../../assets/imgs/hotelimg1.png";
import hotelimg2 from "../../assets/imgs/hotelimg2.png";
import hotelimg3 from "../../assets/imgs/hotelimg3.png";
import hotelimg4 from "../../assets/imgs/hotelimg4.png";
import "./HotelDesc.css";

function HotelDesc() {
  return (
    <div className="hotel-desc">
      <div className="container">
        <div className="desc">
          <h1>Hotel Description</h1>
          <p>
            Discover an oasis of luxury at our exquisite hotel, nestled in the
            <br />
            heart of Egypt. Experience unrivaled comfort in our elegantly
            <br />
            designed rooms and suites. Explore the vibrant city with ease
            <br /> from our convenient central location.
          </p>
          <p>
            Book your stay today and let us create an unforgettable <br />
            experience for you.
          </p>
          <div className="author-info">
            <img src={author} alt="author" className="author-img" />
            <div className="name">
              <p className="manager">Hotel Manager</p>
              <p className="manager-name">George</p>
            </div>
          </div>
        </div>
        <div className="hotel-imgs">
          <div className="img-1">
            <img src={hotelimg1} alt="hotelimg1" />
            <img src={hotelimg2} alt="hotelimg2" />
          </div>
          <div className="img-1">
            <img src={hotelimg3} alt="hotelimg3" />
            <img src={hotelimg4} alt="hotelimg4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDesc;
