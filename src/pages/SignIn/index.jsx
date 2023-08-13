import React from "react";
import { Button, Form,Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/imgs/Group 21.png";
import "../../styles/Form.css";


const SignIn = () => {
  return (
    <div className="mx-auto  my-5 login">
      <Container>
      
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <h3 className="login-title text-secondary text-center my-5">
          Log in to your account
        </h3>

        <Form className="register ">

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mt-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              className="form-control"
              autoComplete="false"
            />
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center forget-password mt-2">

            <div className="d-flex align-items-center">
              <Form.Check className="me-1" type="checkbox" />
              <label>Remember me</label>
            </div>
            <a className=" text-decoration-none" href="#">
            Forgot password?
            </a>
          </div>
   
          <Button variant="secondary" className="bg-secondary text-white w-100 my-3">
              Sign in
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
        
        <p className="account text-center">
          Don’t have an account yet? {" "}
          <a href="#" className="text-secondary text-decoration-none">
            Sign up
          </a>
        </p>
      </Container>
    </div>
  );
};

export default SignIn;
















































































































































































































