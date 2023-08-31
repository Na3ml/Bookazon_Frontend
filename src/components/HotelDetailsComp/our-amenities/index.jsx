import React from 'react'
import Amenities from '../amenities'

function OurAmenities(props) {
    const data=props.amenities
    console.log(data);
  return (
    <div className={`mt-5  pb-3  ${props.className}`}>
    <h3 className=' text-secondary'>{props.title}</h3>
    <p className='mt-3 mb-5'>Discover an oasis of luxury at our exquisite hotel, nestled in the heart of Egypt. Experience unrivaled comfort in our elegantly designed rooms 
    </p>
    <div className="row mt-3">
      {data.length && (data.map((amenity, index) => (
        <div key={index} className="col-6">
          <div className="d-flex align-items-center my-3">
          <img src={amenity.images} className=' me-3' alt={amenity.title} />
            <span className='text-amenities'>{amenity.title}</span>
          </div>
        </div>
      )))}
    </div>


  </div>
  )
}

export default OurAmenities