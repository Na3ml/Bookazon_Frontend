import React from "react";
import author from "../../assets/imgs/author.png";
import hotelimg1 from "../../assets/imgs/hotelimg1.png";
import hotelimg2 from "../../assets/imgs/hotelimg2.png";
import hotelimg3 from "../../assets/imgs/hotelimg3.png";
import hotelimg4 from "../../assets/imgs/hotelimg4.png";
import "./HotelDesc.css";
import { Container, Col, Row } from "react-bootstrap";
function HotelDesc() {
  return (
    <Container className="hotel-desc">
      <Row className="wrapper">
        <Col sx={12} lg={6} className="desc flex-column d-flex">
          <h1 className="mb-4">Hotel Description</h1>
          <p> Discover an oasis of luxury at our exquisite hotel, nestled in theheart of Egypt. Experience unrivaled comfort in our elegantlydesigned rooms and suites. Explore the vibrant city with ease fromour convenient central location.
          </p>
          <p className="my-4">
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
        </Col>
        <Col
          sx={12}
          lg={6}
          className="hotel-imgs d-flex flex-lg-row flex-column"
        >
          <div className="img-1 ">
            <img src={hotelimg1} alt="hotelimg1" className="me-4" />
            <img src={hotelimg2} alt="hotelimg2" />
          </div>
          <div className="img-1">
            <img src={hotelimg3} alt="hotelimg3" className="me-md-4" />
            <img src={hotelimg4} alt="hotelimg4" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HotelDesc;
