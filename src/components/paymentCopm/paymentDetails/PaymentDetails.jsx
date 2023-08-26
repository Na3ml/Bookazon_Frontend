import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Col, Container, Row } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name"),
  lastName: Yup.string().required("Please enter your last name"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Please enter your email"),
  // قم بإضافة قواعد التحقق الأخرى هنا
});

const paymentOptions = [
  { value: "", label: "Payment Method" },
  { value: "stripe", label: "Stripe" },
  { value: "cash", label: "Cash" },
  // قم بإضافة المزيد من الخيارات حسب الحاجة
];
const currencyOptions = [
  { value: "", label: "Select Currency" , hidden: true},
  { value: "egp", label: "(EGP)" },
  { value: "eur", label: "(EUR)" },
  { value: "gbp", label: "(GBP)" },
  // قم بإضافة المزيد من الخيارات حسب الحاجة
];

const PaymentDetails = () => {
  const handleSubmit = async (values) => {
    try {
      await axios.post("URL المستهدف للإرسال", values);
      console.log("تم إرسال النموذج بنجاح!");
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال النموذج:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.phoneNumber) {
        errors.phoneNumber = "Please enter your phone number";
      }

      // يمكنك إجراء التحقق الإضافي هنا وإضافة أي أخطاء إضافية حسب الحاجة

      return errors;
    },
    onSubmit: (values) => {
      // يتم استدعاء هذه الدالة عند إرسال النموذج
      console.log(values);
    },
  });

  return (
    <Container className="payment-details">
      <Row>
        <Col className="my-5 login bg-lighter p-5" sx={12} lg={8}>
          <h1>Details</h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              // قم بإضافة الحقول الأخرى هنا
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-75">
              <Row className=" mb-4 ">
                <Col className="" md={6} >
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                    style={{ color: "red" }}
                  />
                </Col>

                <Col className=" " md={6}>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                    style={{ color: "red" }}
                  />
                </Col>
              </Row>

              <Row className="mb-4 ">
                <Col className="" md={6}>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                    style={{ color: "red" }}
                  />
                </Col>

                <Col className="" md={6}>
                  <label htmlFor="currency" className="form-label">
                  Currency
                  </label>
                  <Field
                    as="select"
                    id="currency"
                    name="currency"
                    className="form-control"
                  >
                    {currencyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="currency"
                    component="div"
                    className="error"
                    style={{ color: "red" }}
                  />
                </Col>
              </Row>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="form-label ">
                  Phone Number
                </label>
                <PhoneInput
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formik.values.phoneNumber}
                  onChange={(value) =>
                    formik.setFieldValue("phoneNumber", value)
                  }
                  onBlur={formik.handleBlur}
                  className="form-control d-flex "
                />
                {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                  <div style={{ color: "red" }}>
                    {formik.errors.phoneNumber}
                    
                  </div>
                )}
              </div>
              <Col className=" mb" sx={12} lg={6}>
                  <label htmlFor="payment" className="form-label" placeholder="Select Currency">
                  
                  </label>
                  <Field
                    as="select"
                    id="payment"
                    name="payment"
                    className="form-control"
                  >
                    {paymentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="currency"
                    component="div"
                    className="error"
                    style={{ color: "red" }}
                  />
                </Col>

             
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentDetails;








<Row>

<Col md={6}> </Col>


<Col md={6}></Col>

</Row>