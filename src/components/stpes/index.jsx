import React from "react";
import {MdDone} from "react-icons/md"
import "./style.css";
function Stpes(props) {
  const circle2 =props.circle2
  const circle3 =props.circle3
  const secondLine=props.secondLine
  return (
    <div className="mt-5 pt-5 steps d-flex">
      <div className="first position-relative bg-secondary"> 
        <div className="detail position-absolute  d-flex align-items-center justify-content-center flex-column ">
          <p>Details</p>
          <div className="circle1 circle rounded-circle bg-white border fw-bold d-flex align-items-center justify-content-center border-secondary text-secondary">
            <MdDone/>
          </div>
        </div>
        <div className="payment position-absolute  d-flex align-items-center justify-content-center flex-column">
        <p>Paymant</p>
        <div className={`circle2  circle   rounded-circle bg-white border fw-bold d-flex align-items-center justify-content-center  text-secondary ${circle2}`}> 
      {props.icon1}
        </div>
        </div>
      </div>
      <div className={`first position-relative  ${secondLine}`} >
      <div className=" confirmation position-absolute   d-flex align-items-center justify-content-center flex-column">
        <p>Confirmation</p>
        <div className={`circle3 circle   rounded-circle bg-white border fw-bold d-flex align-items-center justify-content-center  text-secondary ${circle3}`}> 
        {props.icon2}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Stpes;
