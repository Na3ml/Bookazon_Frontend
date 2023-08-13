import React from "react";
import { Button, Form,Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/imgs/Group 21.png";
import {useFormik } from "formik";
import "../../styles/Form.css";



const SignUp = () => {


  const handleSubmit=(values)=>{
    console.log(values);
  }








  const formik=useFormik({
    initialValues:{
      first_name:"",
      last_name:"",
      email:"",
      password:"",
      c_password:"",
      phone_number:""
    },
    onSubmit : (values)=>handleSubmit(values)
  })



















  return (
    <div className="mx-auto my-5 login">
      <Container>

        <div>
          <img src={Logo} alt="logo" />
        </div>

        <h3 className="login-title text-secondary text-center my-5">
          Create a new account
        </h3>

        <Form onSubmit={formik.handleSubmit} className="register sign">

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
          </Form.Group>

          <Form.Group className="mt-4">
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
          </Form.Group>
         
          <Form.Group className="mt-4">
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
          </Form.Group>

          <Form.Group className="mt-4">
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
          </Form.Group>

          <Form.Group className="mt-4">
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
          </Form.Group>

          <Form.Group className="mt-4">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              className="form-control"
              id="phone_number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>

          <Button variant="secondary" className=" bg-secondary w-100 text-white my-3 "
            type="submit"
          >
               Sign up
          </Button>

          
        <div className="d-flex align-items-center mt-2">
            <Form.Check className="me-1" type="checkbox" />
            <p className="m-0 agree">
              Agree to the <span className="text-secondary">Terms of Use </span> 
              and {" "}  <span className="text-secondary"> {" "} Privacy Policy </span> 
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

      </Container>
    </div>
  );
};

export default SignUp;












































































































