import React from "react";
import "./Footer.css";
import logo from "../../assets/imgs/logo.png";
import mail from "../../assets/imgs/mail.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="main" id="contact-us">
      <Container>
        <Row
          className="footer"
        >
          <Col className="footer-left sx={12} lg={4}">
            <img src={logo} alt="logo" />
            <p className="mt-3">
              Vel officiis dolor ea illo aut eligendi ullam
              <br /> non laudantium magnam et recusandae <br />
              molestiae sit iure unde aut voluptate quaerat.
            </p>
          </Col>
          <Col  sx={12} lg={4} className="d-flex align-items-center justify-md-content-around justify-content-between my-4 my-md-0">
           <div className="">
           <h3>Company</h3>
            <ul>
              <a href="/">
                <li>About us</li>
              </a>
              <a href="/">
                <li>Services</li>
              </a>
              <a href="/">
                <li>Gallery</li>
              </a>
              <a href="/">
                <li>Contact us</li>
              </a>
            </ul>
           </div>
           <div className="" >
            <h3>Help</h3>
            <ul>
              <a href="/">
                <li>Blog</li>
              </a>
              <a href="/">
                <li>FaQs</li>
              </a>
              <a href="/">
                <li>privacy Policy</li>
              </a>
              <a href="/">
                <li>Term of servicse</li>
              </a>
            </ul>
          </div>
          </Col>
        
          {/* footer-right */}
          <Col sx={12}  lg={4} className="d-lg-flex justify-content-end d-block">
            <div>
              <h5>Subscribe to our newsletter</h5>
            <div className="bg-white px-3  py-3 d-flex align-content-center justify-content-center">
            <input
                type="email"
                placeholder="Your Email"
                className="mail-input w-100 border-0"
              />
              <img src={mail} alt="mail" className="mail-img" />
            </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="under d-flex align-items-center justify-content-between flex-wrap">
        <div className="footer-right-under mb-4 mb-0">
          <Link href="/">
            <LinkedInIcon fontSize="medium" style={{ color: "white" }} />
          </Link>
          <Link href="/">
            <InstagramIcon fontSize="medium" style={{ color: "white" }} />{" "}
          </Link>

          <Link href="/">
            <TwitterIcon fontSize="medium" style={{ color: "white" }} />{" "}
          </Link>

          <Link href="/">
            <FacebookIcon fontSize="medium" style={{ color: "white" }} />{" "}
          </Link>
        </div>
        {/* <div className="footer-left-under"> */}
          <p className="text-white">Copyright © 2023 Bookazon. All Rights Reserved </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Footer;
