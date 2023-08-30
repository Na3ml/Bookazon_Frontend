import React, { useState } from "react";
import "./PaymentInfo.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import payment from "../../assets/imgs/payment.png";

function PaymentInfo() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div
      style={{
        // width: "802px",
        height: "600px",
        // backgroundColor: "#F4F4F4",
        background:"payment-details",
        marginTop: "30px",
        borderRadius: "4px",
        marginRight: "80px",
      }}
    >
      <div className="payment-info">
        <h5>Add your payment information</h5>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="card-number">
            <Row className="mb-3">
              <Form.Group as={Col} md="8" controlId="validationCustom03">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <img src={payment} alt="" className="payment-img" />
          </div>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM / YY" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>CVC</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid CVC
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="8" controlId="validationCustom03">
              <Form.Label>Billing Address</Form.Label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  Country or region
                </option>
              </select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>ZIP Code</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid ZIP
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

        </Form>
      </div>
    </div>
  );
}

export default PaymentInfo;
