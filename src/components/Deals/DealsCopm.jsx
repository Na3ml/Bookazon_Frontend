import React from "react";
import "./DealsCopm.css";

// const Div = styled.div`
// /* background-image: url(${props => props.image}); */
// height: 200px;
// width: 200px;`
export const DealsCopm = (props) => {
  return (
    <div
      className="deals"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(56, 56, 56, 0) 0%, #000 100%), url(${props.image})`
      }}
    >
    <div className="deals-child">
    <h3 className="deals-title">{props.title}</h3>
    <span className="deals-price text-primary">{props.price}$</span>
    <span className="time-zone">Per/Night</span>
    </div>
    </div>
  );
};
