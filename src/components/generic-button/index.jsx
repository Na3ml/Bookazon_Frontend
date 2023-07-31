import { Button } from "react-bootstrap";
import React from "react";

function GenericButton(props) {
  return (
    <div className="d-flex ">
      <Button className={` rounded px-2  m-1 ${props.className}`}>
        {props.text}
      </Button>
    </div>
  );
}
export default GenericButton;