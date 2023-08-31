import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import featureBg from "../../assets/imgs/featur-bg.png";
import feature1 from "../../assets/imgs/feature1.png";
import feature2 from "../../assets/imgs/feature2.png";
import feature3 from "../../assets/imgs/feature3.png";
import feature4 from "../../assets/imgs/feature4.png";

import "./style.css";
function Features() {
  const images = [feature1, feature2, feature3, feature4];
  return (
    <div className="bg-light  px-4 px-md-0" id="features">
      <Container>
        <Row className="feature position-relative">
          <Col sx={12} lg={6}>
            <p className=" text-primary m-0 mt-3 fs-20 fw-medium">FEATURES</p>
            <h2 className=" mb-4">Why Choose Us?</h2>
            <p className="describtion mb-5 mb-md-0 ">
            We don’t like being more expensive than anyone else. What we can offer is unique, because we have the power to add extra value to your stay for less. Book direct or subscribe for the best rate guarantee.
            Our hotel website is the place to not only browse and book online-only promotions, but to receive exclusive offers and packages that you won’t find anywhere else.


            </p>
          </Col>
          <Col
            sx={12}
            md={6}
            className="d-flex justify-content-center background  "
          >
            <div className="image pt-3 ps-2">
              <img src={featureBg} alt="image" />
            </div>
            <p className="vertical fw-medium m-0">Our Amazing Services </p>
          </Col>
          <div className="start-0 services ">
            {images.map((item ,i) => {
              return (
                <img
                  key={i}
                  src={item}
                  alt={item}
                  className="me-md-5 me-3  "
                />
              );
            })}
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Features;