import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/imgs/Group 21.png";
import bgImg from "../../assets/imgs/Frame 3.png";
import {Link, useNavigate } from "react-router-dom";
import {useFormik } from "formik";
import * as Yup from "yup"
import "../../styles/Form.css";


const SignUp = () => {

  
  const navigate=useNavigate();



  const handleRegister=(values)=>{
    navigate("/signin")
  }


// validate with Yup

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is Required")
    .min(2,"Name Must Be More Than 2 Characters and Less Than 15 Characters")
    .max(15,"Name Must Be More Than 2 Characters and Less Than 15 Characters"),
    last_name: Yup.string().required("First Name is Required")
    .min(2,"Name Must Be More Than 2 Characters and Less Than 15 Characters")
    .max(15,"Name Must Be More Than 2 Characters and Less Than 15 Characters"),
    email:Yup.string().required("Email is  Required")
    .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
    password: Yup.string().required("Password is Required")
    .min(8, "Password Must Be at Least 8 Characters and Contain at Least One Uppercase Letter, One Lowercase Letter, and One Number")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    "Password: Minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one number"
    ),
      c_password:Yup.string().required("Confirm password is Required")
      .oneOf([Yup.ref("password")],"Password and Confirm Password Not Matched"),
      phone_number:Yup.string().required("Phone Number is Required")
      .matches(/^[0-9]{8,14}$/, "Phone number format required, min 8, max 14 numbers")
  })



  const formik=useFormik({
    initialValues:{
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      c_password:"",
      phone_number:"",
    },
    validationSchema,
    onSubmit : handleRegister
  })





  return (
    <div className="my-5 login">
     
     <Row>

     <Col md={6} className="bg-login">

        <div className=" d-flex justify-content-center align-items-center bg-gradient-200">
            <img src={bgImg}  alt="bg-img" />
        </div>

      </Col>


      <Col md={6} className="mt-4 login-form mx-auto">
      

        <div  className=" d-flex justify-content-center">
          <img src={Logo} alt="logo" />
        </div>

        <h3 className="login-title text-secondary text-center my-5">
          Create a new account
        </h3>

        <Form onSubmit={formik.handleSubmit} className="register">

          <Form.Group>
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              className="form-control"
              id="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.first_name && formik.errors.first_name ? (
              <small className="text-danger d-block mt-1">{formik.errors.first_name}</small>
            ) : null}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              className="form-control"
              id="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.last_name && formik.errors.last_name ? (
              <small className="text-danger d-block mt-1">{formik.errors.last_name}</small>
            ) : null}
          </Form.Group>
         
          <Form.Group className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-danger d-block mt-1">{formik.errors.email}</small>
            ) : null}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              className="form-control"
              autoComplete="false"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-danger d-block mt-1">{formik.errors.password}</small>
            ) : null}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your confirm password"
              className="form-control"
              autoComplete="false"
              id="c_password"
              value={formik.values.c_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.c_password && formik.errors.c_password ? (
              <small className="text-danger d-block mt-1">{formik.errors.c_password}</small>
            ) : null}
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your Phone Number"
              className="form-control"
              id="phone_number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <small className="text-danger d-block mt-1">{formik.errors.phone_number}</small>
            ) : null}
          </Form.Group>


          <Button variant="secondary"
           disabled={!(formik.isValid && formik.dirty)}
           className="btn-login bg-secondary w-100 text-white mt-3"
            type="submit">
               Sign up
          </Button>

          
        <div className="d-flex align-items-start mt-2">
            <Form.Check className="me-1" type="checkbox" />
            <p className="m-0 agree">
            I have read  and accepted the <span className="text-primary">Terms of Use </span> 
              and {" "}  <span className="text-primary"> {" "} Privacy Policy </span> 
            </p>
        </div>
        </Form>
        
          <div className="line"></div>


       <div>
         <Button className="btn d-flex align-items-center  btn-social">
          <BsFacebook className="social-icon  me-4" size={30} color="#1877f2" />
          Continue With Facebook
        </Button>

        <Button className="btn d-flex align-items-center btn-social">
          <FcGoogle className="social-icon  me-4" size={30}  />
          Continue With Google
        </Button>
       </div>

       <p className="text-center">
          Already have an account? {" "}
          <Link className="text-secondary" to={"/signin"}>
            Sign in
          </Link>
        </p>
        
       </Col>
    </Row>
    </div>
  );
};

export default SignUp;












































































































