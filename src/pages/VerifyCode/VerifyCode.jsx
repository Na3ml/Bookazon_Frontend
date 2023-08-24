import React, { useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import Logo from "../../assets/imgs/Group 21.png";
import bgImg from "../../assets/imgs/Frame 5.png";
import {useFormik } from "formik";
import * as Yup from "yup"
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import "../../styles/Form.css";


let baseUrl="https://bookazon.tadafoq.com/Bookazon_Backend/public";

const VerifyCode = () => {

    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();




    const handleResetPassword = async(values)=>{
        try {
          setLoading(true)
         let {data}= await axios.post(`${baseUrl}/api/auth/check-token`,values)
          if(data.message=== "success"){
           toast.success(data.message, {
             duration: 2000,
             className: "text-secondary px-4 fw-bolder",
             iconTheme: {
               primary: '#ff9900',
             }
      
         });
         navigate("/reset-password")
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
      token: Yup.string()
      .required("Reset Code is Required")
      .matches(/^\d{6}$/, "Reset Code must be a 6-digit number")
    })



    const formik=useFormik({
    initialValues:{
      "token" : ""  
    },
    validationSchema,
    onSubmit : handleResetPassword
    })









    
  return (
    <div className="  my-5 login">
     
    <Row className="my-5">
      
      <Col md={6} className="bg-login">
        <div className=" d-flex justify-content-center align-items-center bg-gradient-300">
          <img src={bgImg}  alt="bg-img" />
        </div>
      </Col>


    <Col md={6}  className="mt-4 login-form mx-auto">


      <div className=" d-flex justify-content-center">
        <img src={Logo} alt="logo" />
      </div>

      <h3 className="login-title text-secondary text-center mt-5 mb-4">
      Email Verification
      </h3>

        <p className=" text-center">
        Please type OTP code that given you
        </p>
     

      <Form onSubmit={formik.handleSubmit} className="register">

     <div className=" text-center">           
          <input 
          className="code"
           type="text" 
           name="token"
            value={formik.values.token} 
            onChange={formik.handleChange} 
           onBlur={formik.handleBlur} 
           min={0} max={9} />
    </div>


 
        <Button
         disabled={!(formik.isValid && formik.dirty)}
         variant="secondary" 
         type="submit"
         className="bg-secondary text-white w-100 my-4 d-flex justify-content-center">
         {!loading ? "Verify" :
        <RotatingLines strokeColor="#fff" strokeWidth="5" animationDuration="0.75" width="20" 
        />}  
            
        </Button>

      </Form>

        
      </Col>


    </Row>
  </div>
  )
}

export default VerifyCode;
