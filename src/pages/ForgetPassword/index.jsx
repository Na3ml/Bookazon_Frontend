import React, { useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import Logo from "../../assets/imgs/Group 21.png";
import bgImg from "../../assets/imgs/Frame 4.png";
import {useFormik } from "formik";
import * as Yup from "yup"
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import "../../styles/Form.css";

let baseUrl="https://bookazon.tadafoq.com/Bookazon_Backend/public";


const ForgetPassword = () => {

    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();




    const handleForgetPassword = async(values)=>{
      try {
        setLoading(true)
        let {data}= await axios.post(`${baseUrl}/api/auth/reset-password`,values)
        if(data.message){
          toast.success(data.message, {
            duration: 2000,
            className: "text-secondary px-4 fw-bolder",
            iconTheme: {
              primary: '#ff9900',
            }
      
        });
        navigate("/verify-code")
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
  .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'")  
    })



    const formik=useFormik({
    initialValues:{
      email:""   
    },
    validationSchema,
    onSubmit : handleForgetPassword
    })









    
  return (
    <div className="  my-5 login">
     
    <Row className="my-5">
      
      <Col md={6} className="bg-login">
        <div className=" d-flex justify-content-center align-items-center bg-gradient-300">
          <img src={bgImg}  alt="bg-img" />
        </div>
      </Col>


    <Col md={6} className="mt-4 login-form mx-auto">


      <div className=" d-flex justify-content-center">
        <img src={Logo} alt="logo" />
      </div>

      <h3 className="login-title text-secondary text-center mt-5 mb-4">
      Forgot Password?
      </h3>

      <p className=" mb-4" style={{fontSize:"14px", fontWeight:"400"}}>
      Enter the email address you used when you joined and we will send you instructions to reset your password.
      </p>

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

export default ForgetPassword;
