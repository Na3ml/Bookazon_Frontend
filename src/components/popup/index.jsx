import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineDone } from "react-icons/md";
import GenericButton from "../generic-button";
function ModalComponent(props) {
  const show = props.show;
  const handleClose = props.handleClose;

  return (
    <div >
      <Modal show={show} className="d-flex align-items-center justify-content-center p-5" >
        <div className="d-flex align-items-center justify-content-center flex-column py-4 px-5">
          <div
            className="rounded-circle  my-3 d-flex align-items-center justify-content-center"
            style={{
              color: "#43C311",
              background: "#CAFFC9",
              height: "50px",
              width: "50px",
            }}
          >
            <span className=" fs-26">
              <MdOutlineDone />
            </span>
          </div>
          <p className="fs-26">Your payment was successful!</p>
          <p className="text-center mb-5">
            Nam exercitationem commodi et ducimus quia in dolore <br />
            animi sit mollitia amet id quod eligendi.
          </p>
          <div onClick={handleClose}>
            <GenericButton
              to="/"
              className="bg-secondary  text-white "
              text="Thanks"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModalComponent;