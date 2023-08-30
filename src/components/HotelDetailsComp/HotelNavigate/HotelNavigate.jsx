import React from "react";
import "./HotelNavigate.css";
import { HashLink as Link } from "react-router-hash-link";
import {  Container } from "react-bootstrap";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
const HotelNavigate = () => {
  return (
    <>
      <div className="hotel-navigate mb-5">
        <h1 className="hotel-navigate-title">SWITZERLAND HOTEL</h1>
        <div className="hotel-navigate-route ">
          <Container className="hotel-navigate-route-container d-flex justify-content-between ">
            <Link
              to="/#hote-list"
              className="back-link d-flex fw-medium"
              smooth={true}
              duration={6000}
              offset={-80}
            >
              <BsArrowLeft size={20} style={{ "margin-right": "5px" }} />
              Hote List
            </Link>
            <ul xs={12} className="hotel-navigate-list fw-medium">
              <li>
                <Link
                  to="#description"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  activeClassName="selected"
                >
                  Description
                </Link>
              </li>
              <li>
                <Link
                  to="#amenities"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  activeClassName="selected"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  to="#room"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  activeClassName="selected"
                >
                  Room
                </Link>
              </li>
              <li>
                <Link
                  to="#location"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  activeClassName="selected"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  to="#rating-reviews"
                  activeClass="active"
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  activeClassName="selected"
                >
                  Rate and Reviews
                </Link>
              </li>
            </ul>
            <Link
              to="/hote-list"
              className="hotel-navigate-share  text-secondary"
            >
              <AiOutlineShareAlt size={28} />
              Share Hotel
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HotelNavigate;
