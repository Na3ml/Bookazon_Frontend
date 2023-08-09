import React , { useState } from "react";
import StarsRating from "react-star-rate";
import './style.css'
function Rating() {
    const [value, setValue] = useState(0);
  return (
      <StarsRating
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        classNamePrefix="rating"
      />

  );
}

export default Rating;
