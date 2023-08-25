import React from "react";
import { Link } from "react-router-dom";

function GenericButton(props) {
  return (
    <Link
      to={props.to}
      className={` rounded text-decoration-none  px-5 py-2  d-block ${props.className}`}
    >
      {props.text}
    </Link>
  );
}
export default GenericButton;