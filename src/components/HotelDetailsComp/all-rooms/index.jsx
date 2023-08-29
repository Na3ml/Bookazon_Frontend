import React from "react";
import { Container } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import RoomCard from "../../room-card";
import room1 from "../../../assets/imgs/room1.png";
import room2 from "../../../assets/imgs/room2.png";
import room3 from "../../../assets/imgs/room3.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./style.css";
import DropdownCheckboxes from "../../dropdown-checkbox";
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
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <Container className="all-rooms position-relative py-5" id="room">
      <div className="px-5">
        <div className="d-flex align-items-center justify-content-between flex-column flex-md-row my-5">
          <h2 className="mb-4 mb-md-0">Rooms & Suites</h2>
          <DropdownCheckboxes />
        </div>
        {data.length && (
          <OwlCarousel {...options} className="owl-theme">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <RoomCard img={item} />
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
