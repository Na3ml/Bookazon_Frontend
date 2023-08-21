import React from "react";
import { Container } from "react-bootstrap";

const Location = () => {
  return (
    <Container>
    <h1 className="location-title mb-5" id="location">Location</h1>
      <iframe className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6836.622010755122!2d31.393596094589952!3d31.045440484648786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dbcb849b211%3A0x514f8c4f8b4ef75!2z2YHZhtiv2YIg2YXYp9ix2LTYp9mEINin2YTZhdit2LfYqQ!5e0!3m2!1sar!2seg!4v1692597084727!5m2!1sar!2seg"
        width="100%"
        height="440"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Location;
