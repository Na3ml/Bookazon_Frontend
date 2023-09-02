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
import { toast } from "react-hot-toast";
import {Button} from "react-bootstrap"
import axios from "axios";
import Cookies from "js-cookie";

function RoomDetails() {
  const location = useLocation()
  const info = location.state.info
  const images = location.state.images
  const price =location.state.price
  const jwt_token = Cookies.get("jwt_token");
  console.log({total_guests:info.guests,
    property_id:info.id,
    check_in:info.checkin,
    check_out:info.checkout,
    city:info.city
  }
)
  const handleClick = async () => {
    
    let payload ={total_guests:info.guests,
      property_id:info.id,
      check_in:info.checkin,
      check_out:info.checkout,
      city:info.city
    }
  

    // payload.append('profile_picture',"")
 
    try {
      const response = await axios({
        method: "post",
        url: "https://bookazon.tadafoq.com/api/home/book",
        data: payload,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt_token}`,
        },
      });
 
      if (response.status === 200) {
        // Profile update successful
        console.log("successfully");
        toast.success(response.data.message, {
          duration: 2000,
          className: "text-secondary px-4 fw-bolder",
          iconTheme: {
            primary: "#ff9900",
          },
        });
      } 
    } catch (error) {
      // Handle network or other errors
      toast.error(error.response.data.message,{duration:2000,className:"text-danger px-4 fw-bolder"});
      console.error("An error occurred", error);
    }
  };
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
            <ImageSlider  images={images}/>
          </Col>
          <Col sx={12} lg={6} className=" ps-lg-5 mb-5" >
          <OurAmenities  amenities={data} title="Room Amenities" className=" mx-lg-5 px-3"/>
          <div className='d-flex align-items-center ms-lg-5 ms-3  mt-3'>
        <Button onClick={handleClick} className="bg-secondary border-secondary">
        <GenericButton to="/payment"
         state={price}
         className="bg-secondary text-white " text="Book Now"/>
        </Button>
         {/* <Button onClick={handleClick}>
                 test
         </Button> */}
        </div>
      
       </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoomDetails;
