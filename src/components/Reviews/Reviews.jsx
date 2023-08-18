import React from "react";
import { ReviewsData } from "./Reviews-data";
import "./Reviews.css";
import HandImg from "../../assets/imgs/hand-iamge.png";
import doubleQuotes from "../../assets/imgs/ri_double-quotes-l.png";

const Reviews = () => {
  return (
    <>
      <div className="reviews-title">
        <h1 className="reviews-title-text text-primary">
          See What Our Clients Say<br/> About Us
        </h1>
        <img  className="hand-img" src={HandImg} alt=""/>
        <a className="all-reviews text-secondary" href="/">View All Reviews</a>
      </div>
      <div className="reviews">
        {ReviewsData.map((item) => {
          return (
            <div className="reviews-card" key={item.id}>
                <img className="card-img" src={item.img} alt="" />
              <p className="card-text">{item.desc}</p>
              <img className="doubleQuotes-img" src={doubleQuotes} alt=""/>
              <h6 className="card-title">
                {item.name} - {item.job}
              </h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
