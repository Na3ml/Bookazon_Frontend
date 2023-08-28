import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Stpes from "../../components/stpes";
import { MdDone } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import ReservationSummary from "../../components/reservation-summary";
import ConfirmitionComp from "../../components/confirmitionComp";
function Confirmation() {
  return (
    <div  className="py-5 mt-5">
          <Container>
      <Row>
        <Col sx={12} lg={8} className='pe-5'>
          <Stpes
            circle2="border-secondary"
            circle3="border-secondary"
            icon1={<MdDone/>}
            icon2={<MdDone/>}
            secondLine="bg-secondary"
          ></Stpes>
          <ConfirmitionComp/>
        </Col>
        <Col sx={12} lg={4}>
        <ReservationSummary/>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Confirmation