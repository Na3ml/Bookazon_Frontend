import React from 'react'
import gym from "../../../assets/imgs/gg_gym.jpg"
import people from "../../../assets/imgs/people.jpg"
import boat from "../../../assets/imgs/ph_boat-light.jpg"
import sun from "../../../assets/imgs/sun-fog.jpg"
import spa from "../../../assets/imgs/cil_spa.jpg"
import drink from "../../../assets/imgs/fluent_drink-wine-20-regular.jpg"
import receive from "../../../assets/imgs/receive-square-2.jpg"
import wind from "../../../assets/imgs/wind-2.jpg"
import "./style.css";


const Amenities = () => {


  const amenitiesData = [
    { title: "Swimming Pool", images: wind },
    { title: "Conference Room", images: people },
    { title: "Diving", images: receive },
    { title: "Boat Tours", images: boat },
    { title: "Drinks Bar", images: drink },
    { title: "Private Beach", images: sun },
    { title: "Spa & Massage", images: spa },
    { title: "Gym & Yoga", images: gym }
  ];






  return (
    <div className='banner-amenities position-relative mb-5' id='amenities'>
      <div className=' position-absolute card-amenities '>
        <div className='mx-3 mt-5 mx-sm-5'>
          <h3 className=' text-secondary'>Our Amenities</h3>
          <p className='mt-3 mb-5'>Discover an oasis of luxury at our exquisite hotel, nestled in the heart of Egypt. Experience unrivaled comfort in our elegantly designed rooms 
          </p>

          <div className="row mt-3">
            {amenitiesData.map((amenity, index) => (
              <div key={index} className="col-6">
                <div className="d-flex align-items-center my-3">
                <img src={amenity.images} className=' me-3' alt={amenity.title} />
                  <span className='text-amenities'>{amenity.title}</span>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Amenities;
