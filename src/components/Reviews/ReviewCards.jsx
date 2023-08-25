import React from 'react'
import "./Reviews.css";

import { Col, Row } from 'react-bootstrap'
import { ReviewsData } from "./Reviews-data";

import doubleQuotes from "../../assets/imgs/ri_double-quotes-l.png";


const ReviewCards = () => {
  return (
    <Row className="reviews">
    <a className="all-reviews text-secondary" href="/">
    View All Reviews
  </a>
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
  )
}

export default ReviewCards
