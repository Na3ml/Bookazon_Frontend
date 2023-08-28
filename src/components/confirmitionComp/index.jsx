import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import "./style.css"
function ConfirmitionComp() {
  return (
    <div
      className=" mt-5 py-3 ps-3 pe-5  d-flex align-items-start rounded confirmition-comp "
    >
      <div
        className=" bg-white mt-3 me-3 done d-flex align-items-center justify-content-center"
      >
        <span className=" fs-26">
           <MdOutlineDone />
        </span>
      </div>
      <div>
        <h2>Your Booking Is Confirmed</h2>
        <p className="text-gray">
          We are delighted to confirm your booking at swizerland hotel. Your
          reservation is now confirmed, and we look forward to welcoming you on
          November.
        </p>
      </div>
    </div>
  );
}
export default ConfirmitionComp;