import React, { useState } from "react";
import "./style.css";
import moment from "moment";
import { Container,Row ,Col } from "react-bootstrap";
function DatePicker() {
  const [value, setValue] = useState("8/8/2023");
  const handelDate = (e) => {
    setValue(e.target.value);
    console.log(moment(e.target.value).format("LL"));
  };

  return (
    <div className="date-picker">
      <div className="position-relative  d-flex align-items-center ">
        <input
          type="date"
          className=" input h-100 w-100 pe-2 py-1"
          onChange={(e) => {
            handelDate(e);
          }}
        />
        <p className="date position-absolute fw-medium fs-20 ps-2 py-1">
        {value}
        </p>
      </div>
    </div>
  
  );
}
export default DatePicker;
