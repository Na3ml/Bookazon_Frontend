import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReservationDetail from "../../components/reservation-detail";
import bed from "../../assets/imgs/bed.png"
import people from "../../assets/imgs/people.png"
import bathroom from "../../assets/imgs/bathroom.png"
import airConditioner from "../../assets/imgs/air-conditioner.png"
import chair from "../../assets/imgs/chair.png"
import board from "../../assets/imgs/board.png"
import coffee from "../../assets/imgs/coffee.png"
import tv from "../../assets/imgs/tv.png"
import GenericButton from '../../components/generic-button'
import OurAmenities from "../../components/HotelDetailsComp/our-amenities";
import ImageSlider from "../../components/image-slider";
import { useLocation } from 'react-router-dom'
import Stpes from "../../components/stpes";
import { BsDot } from "react-icons/bs";
import {RiLockLine} from 'react-icons/ri'
function RoomDetails() {
  const location = useLocation()
  const info = location.state
  console.log(info);
  const data=[
    { title: "Comfortable bed", images: bed },
    { title: "Coffee/tea making facilities", images: coffee },
    { title: "Private bathroom ", images: bathroom },
    { title: "Room service", images: people },
    { title: "Air conditioning and heating", images: airConditioner },
    { title: "Seating area", images: chair },
    { title: "Television", images: tv },
    { title: "Iron and ironing board", images: board }
  ];
  return (
    <div>
      <Container>
        <Row className="mt-5 pt-5">
          <Col sx={12} lg={6}  >
            {/* <ReservationDetail /> */}
         <div className='align-items-center justify-content-center flex-column d-md-flex d-none'>
         <Stpes
            circle2="border-gray-400"
            icon1={<BsDot />}
            icon2={<BsDot />}
            secondLine="bg-gray-400 "
          ></Stpes>
         </div>
            <ImageSlider/>
          </Col>
          <Col sx={12} lg={6} className=" ps-lg-5 mb-5" >
          <OurAmenities  amenities={data} title="Room Amenities" className=" mx-lg-5 px-3"/>
          <div className='d-flex align-items-center ms-lg-5 ms-3  mt-3'>
        <GenericButton to="/payment" className="bg-secondary  text-white " text="Booh Now"/>
        </div>
      
       </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoomDetails;
