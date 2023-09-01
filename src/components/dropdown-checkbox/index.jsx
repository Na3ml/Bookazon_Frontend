import React, { useState, useRef } from "react";
import "./style.css";
function DropdownCheckboxes() {
  const [isChecked, setIsChecked] = useState("");
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState("");

  const checkBoxes = useRef(null);
  const dropDown = useRef(null);

  const handlArrow = () => {
  setShow(!show);
    show ? setRotate("rotate") : setRotate("");
  };

  const list = ["Single", "Double", "Triple", "Quad", "Suite"];
  const types = [
    { name: 'Single', team: 'Justice League' },
    { name: 'Double', team: 'Avengers' },
    { name: 'Triple', team: 'Justice League' },
    { name: 'Quad', team: 'Avengers' },
    { name: 'Suite', team: 'X-Force' }
  ];
  
  const selectype = types.filter(type => type.name === isChecked);
  const showCheckboxes = () => {
    handlArrow();
    if (show) {
      checkBoxes.current.style.display = "block";
      dropDown.current.style.border = "2px solid #7E57C2";
      // setShow(false);
    } else {
      checkBoxes.current.style.display = "none";
      dropDown.current.style.border = "2px solid black";
      // setShow(true);
    }
  };
  const [rooms,setRooms]=useState([])
 
  const handelClick = (option) => {
    const selectype = types.filter(type => type.name === option);
  setRooms(selectype)
    setShow(false)
    // console.log(option);
    // console.log(option);
   setIsChecked(option);
  };

  console.log(rooms);
  return (
    <div className="dropDown-checkBox">
        <div className="multiple-selection ">
          <div
            className="select-box position-relative"
            onClick={handlArrow}
          >
            <select className={`${show?"border-secondary":"border-gray"} w-100 p-2`} ref={dropDown}>
              <option>Filter by type</option>
            </select>
            <div className={`${rotate} arrow position-absolute  `}>
              <svg height="20" width="20" viewBox="0 0 20 20">
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
            <div className=" position-absolute top-0 bottom-0 start-0 end-0"></div>
 <div
              ref={checkBoxes}
              className={`p-3 py-4 w-100 check-boxes  position-absolute bg-white border  ${show?"d-block":"d-none"}   start-0 `}
            >
              {list.map((item) => {
                return (
                  <label key={item} className="check-box d-flex align-items-center position-relative mb-2 ps-5">
                    {item}
                    <input
                      type="checkbox"
                      name={item}
                      checked={isChecked === item}
                      onChange={()=>{handelClick(item)}}
                      className="position-absolute  "
                    />
                    <span className="checkmark position-absolute top-0 start-0 border border-1 border-secondary"></span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
}
export default DropdownCheckboxes;