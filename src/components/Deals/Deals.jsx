import React from "react";
import "./Deals.css";
import img1 from "../../assets/imgs/img1.png";
import img2 from "../../assets/imgs/img2.png";
import img3 from "../../assets/imgs/img3.png";
import img4 from "../../assets/imgs/img4.png";
import { DealsCopm } from "./DealsCopm";
import { Col, Container, Row } from "react-bootstrap";

function Deals() {
  return (
    <Container id="deals">
      <Row className="main-deals d-flex justify-content-center align-items-center mx-auto" >
        <Col  sx={12} md={12} lg={6}>
        <div className="deals-left">
        <h1 className="main-deals-title">
            We Always Have Best
            <br /> <span className="text-primary">DEALS</span>{" "}
          </h1>
          <DealsCopm title="Deluxe Room" price="650" image={img3} />
          <DealsCopm title="Suite" price="375" image={img4} />
        </div>
        </Col>
        <Col className="deals-right" sx={12} md={12} lg={6}>
          <DealsCopm title="Double Room" price="400" image={img1} />
          <DealsCopm title="Triple Room" price="500" image={img2} />
        </Col>
      </Row>
    </Container>
  );
}

export default Deals;