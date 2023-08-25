import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Stpes from "../../components/stpes";
import { MdDone } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import ReservationSummary from "../../components/reservation-summary";
function Confirmation() {
  return (
    <div>
          <Container>
      <Row>
        <Col sx={12} md={7}>
          <Stpes
            circle2="border-secondary"
            circle3="border-secondary"
            icon1={<MdDone/>}
            icon2={<MdDone/>}
            secondLine="bg-secondary"
          ></Stpes>
          
        </Col>
        <Col sx={12} md={5}>
        <ReservationSummary/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Confirmation