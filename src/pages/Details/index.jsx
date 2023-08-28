import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Stpes from "../../components/stpes";
import { BsDot } from "react-icons/bs";
import {RiLockLine} from 'react-icons/ri'
import GenericButton from '../../components/generic-button'
import ReservationSummary from "../../components/reservation-summary";
import PaymentDetails from "../../components/paymentCopm/paymentDetails/PaymentDetails";
function Details() {
  
  return (
    <Container className="py-5 mt-5">
      <Row>
        <Col sx={12} lg={8}>
          <Stpes
            circle2="border-gray-400"
            icon1={<BsDot />}
            icon2={<BsDot />}
            secondLine="bg-gray-400 "
          ></Stpes>
             <PaymentDetails/>  
        </Col>
        <Col sx={12} lg={4}>
        <ReservationSummary/>
        </Col>
      </Row>

        <p className="d-flex align-items-center text-gray-700 fs-5"><span className="me-2"><RiLockLine/></span>
        <span className="mt-1"> Your information is safe</span>
         </p>
         <div className='d-flex align-items-center justify-content-center'>
        <GenericButton to="/payment" className="bg-secondary  text-white " text="Continue"/>
        </div>
    </Container>
  );
}
export default Details;