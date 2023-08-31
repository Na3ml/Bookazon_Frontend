import React from 'react'
import "./Reviews.css";

import { Col, Row } from 'react-bootstrap'
import { ReviewsData } from "./Reviews-data";

import doubleQuotes from "../../assets/imgs/ri_double-quotes-l.png";


const ReviewCards = () => {
  return (
    <Row className="reviews">
    <a className="all-reviews text-secondary me-3 me-md-0" href="/">
    View All Reviews
  </a>
        {ReviewsData.map((item) => {
          return (
            <Col xs={12} md={6} lg={4} className="mb-5 px-3" key={item.id}>
              <div className="reviews-card">
                <img className="card-img" src={item.img} alt="image" />
                <p className="card-text">{item.desc}</p>
                <img className="doubleQuotes-img" src={doubleQuotes} alt="" />
                <h6 className="card-title">
                  {item.name}
                </h6>
              </div>
            </Col>
          );
        })}
      </Row>
  )
}

export default ReviewCards
