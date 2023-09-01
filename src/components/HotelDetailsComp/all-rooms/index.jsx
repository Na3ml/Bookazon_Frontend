import React, { useState } from "react";
import moment from "moment";
import { Container ,Row ,Col } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import img from "../../../assets/imgs/arrow-right.png";
import RoomCard from "../../room-card";
import room1 from "../../../assets/imgs/room1.png";
import room2 from "../../../assets/imgs/room2.png";
import room3 from "../../../assets/imgs/room3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
import DropdownCheckboxes from "../../dropdown-checkbox";
import DatePicker from "../../customeDatePicker";
function AllRooms() {
  const data = [
    room1,
    room2,
    room3,
    room1,
    room2,
    room3,
    room1,
    room2,
    room3,
    room1,
    room2,
    room3,
  ];
  const options = {
    margin: 50,
    responsiveClass: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  const minDate = new Date().toJSON().slice(0, 10);
  const day = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  const checkoutStartDay = day.toJSON().slice(0, 10);
  console.log(checkoutStartDay);
  console.log(day);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  // const [info, setInfo] = useState({
  //   checkin,
  //   checkout,
  //   guests,
  // });
  console.log(value2);
  
  const [checkin, setCheckin] = useState(moment(minDate).format("LL"));
  const [checkout, setCheckout] = useState(moment(checkoutStartDay).format("LL"));
  const [guests, setGuests] = useState(2);
  const handelCheckin = (e) => {
    setValue1(e.target.value);
    setCheckin(moment(e.target.value).format("LL"));
    console.log(moment(e.target.value).format("LL"));
  };
  const handelCheckout = (e) => {
    setValue2(e.target.value);
    setCheckout(moment(e.target.value).format("LL"));
    console.log(moment(e.target.value).format("LL"));
  };
  const handelGuests = (e) => {
    setValue3(e.target.value);
    setGuests(e.target.value);
  };

  // console.log();

  // window.info = {
  //   checkin,
  //   checkout,
  //   guests,
  // };
  sessionStorage.setItem("reservationInfo",JSON.stringify({
    checkin,
    checkout,
    guests,
  } ));
  return (
    <Container className="all-rooms position-relative py-5" id="room">
      <div className="px-5">
        <div className="d-flex align-items-center justify-content-between flex-column flex-md-row my-5">
          <h2 className="mb-4 mb-md-0">Rooms & Suites</h2>
          <DropdownCheckboxes />
        </div>
        <Row className="my-4 ">
        <Col sx={12} lg={4}  className="mb-4">
        <p className="text-gray-500 fs-20 fw-medium">Check in</p>
        <div className="input-container d-flex align-items-center position-relative">
            <img
              src={img}
              alt="image"
              className="position-absolute  clander-img"
            />
            <input
              type="date"
              value={value1}
              min={minDate}
              onChange={(e) => {
                handelCheckin(e);
              }}
            ></input>
            <p className="date position-absolute fw-medium fs-20 ps-2 py-1">
              {checkin}
            </p>
          </div>
        </Col>
        <Col sx={12} lg={4} className="mb-4">
        <p className="text-gray-500 fs-20 fw-medium">Check Out</p>
        <div className="input-container d-flex align-items-center position-relative">
            <img
              src={img}
              alt="image"
              className="position-absolute  clander-img"
            />
            <input
             value={value2}
             type="date"
             min={checkoutStartDay}
             onChange={(e) => {
               handelCheckout(e);
             }}
             
            ></input>
            <p className="date position-absolute fw-medium fs-20 ps-2 py-1">
              {checkout}
            </p>
          </div>
        </Col>
        <Col sx={12} lg={4}  className="mb-4">
        <div className=" mb-3">
          <p className="text-gray-500  fs-20 fw-medium">Guests</p>
          <select
          value={value3}
            name="guests"
            onChange={(e)=>{handelGuests(e)}}
            className="d-flex align-items-center w-100 guests fw-medium fs-20 px-2 py-2 border-black border"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        </Col>
        </Row>

        {data.length && (
          <OwlCarousel {...options} className="owl-theme">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <RoomCard img={item}  info={{
    checkin,
    checkout,
    guests,
  }}/>
                </div>
              );
            })}
          </OwlCarousel>
        )}
      </div>
    </Container>
  );
}
export default AllRooms;
