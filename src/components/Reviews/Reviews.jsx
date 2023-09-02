import React from "react";
import "./Reviews.css";
import { Container } from "react-bootstrap";
import ReviewCards from "./ReviewCards";

const Reviews = () => {
  return (
    <Container id="reviews">
      <div className="reviews-title">
        <h2 className="reviews-title-text text-primary">
          See What Our Clients Say
          <br/> About Us
        </h2>      
      </div>
     <ReviewCards />
    </Container>
  );
};

export default Reviews;
