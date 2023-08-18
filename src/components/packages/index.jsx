import React from "react";
import line from "../../assets/imgs/Line.png";
import line1 from "../../assets/imgs/Line1.png";
import { Link } from "react-router-dom";
import "./style.css";
function Packages() {
  return (
    <div className="packages d-md-flex  d-block">
      <div className="package-card  w-md-50 w-100  position-relative d-flex align-items-center justify-content-center flex-column">
        <p className="fw-bold text-white m-0">PROMOTION</p>
        <h2 className="text-white mb-4">Explore Deals</h2>
        <img src={line} className=" position-absolute  d-md-block d-none" />
        <Link
          to="/"
          className="text-white text-decoration-none rounded px-4 py-2 me-3 mt-md-2 mt-0 d-block border border-white"
        >
          View Packages
        </Link>
      </div>
      <div className="package-card   w-md-50 w-100   position-relative d-flex align-items-center justify-content-center flex-column">
        <p className="fw-bold text-white m-0">PROMOTION</p>
        <h2 className="text-white mb-4">Explore Offers</h2>

        <img src={line1} className=" position-absolute d-md-block d-none " />

        <Link
          to="/"
          className="text-white text-decoration-none rounded px-4 py-2 me-3 mt-md-2 mt-0 d-block border border-white"
        >
          View Packages
        </Link>
      </div>
    </div>
  );
}

export default Packages;
