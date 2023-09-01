import React, { useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import Logo from "../../assets/imgs/Group 21.png";
import bgImg from "../../assets/imgs/Frame 5.png";
import {useFormik } from "formik";
import * as Yup from "yup"
import {useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import baseInstance from "../../networking/baseInstance"
import "../../styles/Form.css";



const ResetPassword = () => {

    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();




    const handleResetPassword = async(values)=>{
      try {
        setLoading(true)
       let {data}= await baseInstance.post(`update-password`,values)
        if(data.status === 1){
         toast.success(data.message, {
           duration: 2000,
           className: "text-secondary px-4 fw-bolder",
           iconTheme: {
             primary: '#ff9900',
           }
    
       });
       navigate("/signin")
       }
     } catch (error) {
       toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
     }
     finally {
       setLoading(false);
     }
    }

// validate with Yup
    const validationSchema = Yup.object({
      email:Yup.string().required("Email is  Required")
      .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
        password: Yup.string().required("Password is Required")
        .min(8, "Password Must Be at Least 8 Characters and Contain at Least One Uppercase Letter, One Lowercase Letter, and One Number")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password: Minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one number"
        ),
        password_confirmation:Yup.string().required("Confirm password is Required")
        .oneOf([Yup.ref("password")],"Password and Confirm Password Not Matched"),
        token: Yup.string()
      .required("Reset Code is Required")
      .matches(/^\d{6}$/, "Reset Code must be a 6-digit number")
    })



    const formik=useFormik({
    initialValues:{
      email:"", 
      password: "",
      password_confirmation: "",
      "token":""
    },
    validationSchema,
    onSubmit : handleResetPassword
    })









    
  return (
    <div className="  my-5 login">
     
    <Row className="my-5">
      
      <Col md={6} className="bg-login">
        <div className=" d-flex justify-content-center align-items-center bg-gradient-100">
          <img src={bgImg}  alt="bg-img" />
        </div>
      </Col>


    <Col md={6} className="mt-4 login-form mx-auto">


      <div className=" d-flex justify-content-center ">
        <img src={Logo} alt="logo" />
      </div>

      <h3 className="login-title text-secondary text-center mt-5 mb-4">
            Reset Password
      </h3>

     

      <Form onSubmit={formik.handleSubmit} className="register">

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
              autoComplete="off"
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
              autoComplete="off"
              id="password_confirmation"
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
              <small className="text-danger d-block mt-1">{formik.errors.password_confirmation}</small>
            ) : null}
          </Form.Group>

          <div className=" mt-3">
          <Form.Group className="mt-3">
          <Form.Label>Confirm Verify Code</Form.Label>          
          <Form.Control 
          className="code"
          style={{letterSpacing: '4px' }}
           type="text" 
           name="token"
            value={formik.values.token} 
            onChange={formik.handleChange} 
           onBlur={formik.handleBlur} 
           min={0} max={9} />
          </Form.Group>
         
          </div>
 
        <Button
         disabled={!(formik.isValid && formik.dirty)}
         variant="secondary" 
         type="submit"
         className="bg-secondary text-white w-100 my-4 d-flex justify-content-center">
         {!loading ? "Send" :
        <RotatingLines strokeColor="#fff" strokeWidth="5" animationDuration="0.75" width="20" 
        />}  
            
        </Button>

      </Form>

        
      </Col>


    </Row>
  </div>
  )
}

export default ResetPassword;
