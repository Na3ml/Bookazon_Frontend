import React from "react";
import "./Reviews.css";
import HandImg from "../../assets/imgs/hand-iamge.png";
import { Container } from "react-bootstrap";
import ReviewCards from "./ReviewCards";

const Reviews = () => {
  return (
    <Container id="reviews">
      <div className="reviews-title">
        <h1 className="reviews-title-text text-primary">
          See What Our Clients Say
          <br /> About Us
        </h1>
        <img className="hand-img" src={HandImg} alt="" />
      
      </div>
     <ReviewCards />
    </Container>
  );
};

export default Reviews;
