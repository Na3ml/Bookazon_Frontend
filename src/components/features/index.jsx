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
    <div className="bg-light py-5" >
      <Container>
        <Row className="feature position-relative">
          <Col sx={12} md={6}>
            <p className=" text-primary m-0 mt-3 fw-medium">FEATURES</p>
            <h2 className=" mb-3">Why Choose Us?</h2>
            <p className="describtion mb-5 mb-md-0 ">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
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
          <div className="    start-0 services ">
            {images.map((item) => {
              return (
                <img
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