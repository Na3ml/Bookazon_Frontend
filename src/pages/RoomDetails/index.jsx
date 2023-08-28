import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReservationDetail from "../../components/reservation-detail";
function RoomDetails() {
  return (
    <div>
      <Container>
        <Row>
          <Col sx={12} md={6}>
            <ReservationDetail />
          </Col>
          <Col sx={12} md={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoomDetails;
