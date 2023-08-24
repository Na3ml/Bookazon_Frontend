import React, {useContext, useState } from "react";
import { Button, Col, Form, Row} from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/imgs/Group 21.png";
import bgImg from "../../assets/imgs/Frame 3.png";
import {useFormik } from "formik";
import * as Yup from "yup"
import {Link, useNavigate } from "react-router-dom";
import "../../styles/Form.css";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthContext";


let baseUrl="https://bookazon.tadafoq.com/Bookazon_Backend/public";

const SignIn = () => {
  const {saveUserData} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();



  const handleLogin=async(values)=>{

    
    try {
      setLoading(true)
      let {data}= await axios.post(`${baseUrl}/api/auth/login`,values)
     
      if(data.message){
        toast.success(data.message, {
          duration: 2000,
          className: "text-secondary px-4 fw-bolder",
          iconTheme: {
            primary: '#ff9900',
          }
      });
      localStorage.setItem("userToken", data.data.token)
      saveUserData();
       navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
    }
    finally {
      setLoading(false);
    }

  };


// validate with Yup
  const validationSchema = Yup.object({
    email:Yup.string().required("Email is  Required")
  .matches(/^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/, "Email is must end @ with gmail or yahoo '.com'"),
    password: Yup.string().required("Password is Required")
    .min(8, "Password: Minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one number")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password: Minimum length of 8 characters, at least one uppercase letter, one lowercase letter, and one number"),
  })



  const formik=useFormik({
    initialValues:{
      email:"",
      password:"",
      
    },
    validationSchema,
    onSubmit : handleLogin
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


        <div className=" d-flex justify-content-center">
          <img src={Logo} alt="logo" />
        </div>

        <h3 className="login-title text-secondary text-center my-5">
        Welcome Back !
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

          <div className="d-flex justify-content-between align-items-center forget-password mt-2">

            <div className="d-flex align-items-center">
              <Form.Check className="me-1" type="checkbox" />
              <label>Remember me</label>
            </div>
            <Link to={"/forget-password"} className=" text-decoration-none text-primary">
            Forgot password?
            </Link>
          </div>
   
          <Button
           disabled={!(formik.isValid && formik.dirty)}
           variant="secondary" 
           type="submit"
           className="bg-secondary text-white w-100 my-3 d-flex justify-content-center">
           {!loading ? "Sign in" :
          <RotatingLines strokeColor="#fff" strokeWidth="5" animationDuration="0.75" width="20" 
          />}  
              
          </Button>

        </Form>

          <div className="line"></div>
          
        <div>
        <Button className="btn d-flex align-items-center btn-social">
          <BsFacebook className="social-icon me-4 " color="#1877f2" size={30} />
          Continue With Facebook
        </Button>

        <Button className="btn d-flex align-items-center btn-social">
          <FcGoogle className="social-icon me-4" size={30} />
          Continue With Google
        </Button>
        </div>
        
        <p className=" text-center">
          Don’t have an account yet? {" "}
          <Link to={"/signup"} className="text-secondary">
            Sign up
          </Link>
        </p>

        </Col>


      </Row>
    </div>
  );
};

export default SignIn;
