import React from "react";
import "./Footer.css";
import logo from "../../assets/imgs/logo.png";
import mail from "../../assets/imgs/mail.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "@mui/material";

function Footer() {
  return (
    <div className="main">
      <div className="footer">
        <div className="footer-left">
          <img src={logo} alt="logo" />
          <p>
            Vel officiis dolor ea illo aut eligendi ullam non <br />
            laudantium magnam et recusandae molestiae <br />
            sit iure unde aut voluptate quaerat.
          </p>
        </div>
        <div className="list">
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
        <div className="list">
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
        <div className="footer-right">
          <h5>Subscribe to our newsletter</h5>
          <input type="email" placeholder="Your Email" className="mail-input" />
          <img src={mail} alt="mail" className="mail-img" />
        </div>
      </div>
      <div className="under">
        <div className="footer-right-under">
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
        <div className="footer-left-under">
          <p>Copyright © 2023 Bookazon. All Rights Reserved </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
