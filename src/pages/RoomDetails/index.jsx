import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReservationDetail from "../../components/reservation-detail";
import Amenities from "../../components/HotelDetailsComp/amenities";
function RoomDetails() {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center">
          <Col sx={12} md={6} >
            <ReservationDetail />
          </Col>
          <Col sx={12} md={6}  >
        <Amenities title="Room Amenities" className="border-0 position-absolute end-0 "/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoomDetails;
