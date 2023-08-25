import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Stpes from "../../components/stpes";
import { MdDone } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import {RiLockLine} from 'react-icons/ri'
import GenericButton from '../../components/generic-button'
import ReservationSummary from "../../components/reservation-summary";
function Details() {
  return (
    <Container>
      <Row>
        <Col sx={12} md={7}>
          <Stpes
            circle2="border-gray-400"
            icon1={<BsDot />}
            icon2={<BsDot />}
            secondLine="bg-gray-400 "
          ></Stpes>

        </Col>
        <Col sx={12} md={5}>
        <ReservationSummary/>
        </Col>
      </Row>

        <p className="d-flex align-items-center text-gray-700 fs-5"><span className="me-2"><RiLockLine/></span>
        <span className="mt-1"> Your information is safe</span>
         </p>
         <div className='d-flex align-items-center justify-content-center'>
        <GenericButton to="" className="bg-secondary  text-white " text="Continue"/>
        </div>
    </Container>
  );
}
export default Details;