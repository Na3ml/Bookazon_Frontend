import React from "react";
import { ReviewsData } from "./Reviews-data";
import "./Reviews.css";
import HandImg from "../../assets/imgs/hand-iamge.png";
import doubleQuotes from "../../assets/imgs/ri_double-quotes-l.png";
import { Col, Container, Row } from "react-bootstrap";

const Reviews = () => {
  return (
    <Container id="features">
      <div className="reviews-title">
        <h1 className="reviews-title-text text-primary">
          See What Our Clients Say
          <br /> About Us
        </h1>
        <img className="hand-img" src={HandImg} alt="" />
        <a className="all-reviews text-secondary" href="/">
          View All Reviews
        </a>
      </div>
      <Row className="reviews">
        {ReviewsData.map((item) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-5" key={item.id}>
              <div className="reviews-card">
                <img className="card-img" src={item.img} alt="" />
                <p className="card-text">{item.desc}</p>
                <img className="doubleQuotes-img" src={doubleQuotes} alt="" />
                <h6 className="card-title">
                  {item.name} - {item.job}
                </h6>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Reviews;
