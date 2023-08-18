import React from 'react'
import line from "../../assets/imgs/Line.png"
import line1 from "../../assets/imgs/Line1.png"
import { Link } from "react-router-dom";
import './style.css'
import { Col, Row } from 'react-bootstrap'
function Packages() {
  return (
    <Row className='packages '>

    <Col sx={12} md={6} className='package-card   position-relative d-flex align-items-center justify-content-center flex-column'>
       <p className='fw-bold text-white m-0'>PROMOTION</p>
        <h2 className='text-white mb-4'>Explore Deals</h2>
        <img
          src={line}
          className=" position-absolute  d-md-block d-none"
        />
        <Link
            to="/"
            className="text-white text-decoration-none rounded px-4 py-2 me-3 mt-md-2 mt-0 d-block border border-white"
          >
            View Packages
          </Link>
    </Col>
    <Col sx={12} md={6} className='package-card    position-relative d-flex align-items-center justify-content-center flex-column'>
       <p className='fw-bold text-white m-0'>PROMOTION</p>
        <h2 className='text-white mb-4'>Explore Offers</h2>
     
         <img
          src={line1}
          className=" position-absolute d-md-block d-none "
        />
       
        <Link
            to="/"
            className="text-white text-decoration-none rounded px-4 py-2 me-3 mt-md-2 mt-0 d-block border border-white"
          >
            View Packages
          </Link>
    </Col>
    </Row>
  )
}

export default Packages