import React  ,{useState}from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import Stpes from "../../components/stpes";
import { MdDone } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import ReservationSummary from "../../components/reservation-summary";
import { RiLockLine } from "react-icons/ri";
import ModalComponent from "../../components/popup";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
function Payment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container  className="py-5 mt-5">
      <Row>
        <Col sx={12} lg={8}>
          <Stpes
            circle2="border-secondary"
            icon1={<MdDone />}
            icon2={<BsDot />}
            secondLine="bg-secondary"
          ></Stpes>
       <PaymentInfo/>
        </Col>
        <Col sx={12} lg={4}>
          <ReservationSummary />
        </Col>
      </Row>
      <p className="d-flex align-items-center text-gray-700 fs-5">
        <span className="me-2">
          <RiLockLine />
        </span>
        <span className="mt-1"> Your information is safe</span>
      </p>
      <div className="d-flex align-items-center justify-content-center">
       
        <Button  onClick={handleShow} className="rounded text-decoration-none  border-secondary px-5 py-2 bg-secondary  text-white ">
        Pay $50
        </Button>
        <ModalComponent handelShow={handleShow} show={show} handleClose={handleClose} ></ModalComponent>
      </div>
    </Container>
  );
}

export default Payment;
