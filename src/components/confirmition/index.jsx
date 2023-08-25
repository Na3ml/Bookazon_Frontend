import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import "./style.css"
function Confirmition() {
  return (
    <div
      style={{ background: "rgba(72, 255, 0, 0.22)" }}
      className="pt-5 mt-5 w-50 p-3  d-flex align-items-start rounded"
    >
      <div
        className="rounded-circle bg-white p-3 mt-3 me-2"
        style={{ color: "#43C311" }}
      >
        <span className=" fs-26">
           <MdOutlineDone />
        </span>
      </div>
      <div>
        <h2>Your Booking Is Confirmed</h2>
        <p className="text-gray">
          We are delighted to confirm your booking at swizerland hotel. Your
          reservation is now confirmed, and we look forward to welcoming you on
          November.
        </p>
      </div>
    </div>
    // <div style={{background:"rgba(126, 87, 194, 0.44)"}} className="pt-5 mt-5 search d-flex">
    //     {/* <div className="text-white city d-flex align-items-center ">
    //     <span>
    //           <FaMapMarkerAlt />
    //         </span>
    //         <input type="text" placeholder="Where to?" className="border-0 " style={{background:"transparant"}} />
    //     </div> */}
    //  <div className="">
    //  <div className="d-flex align-items-center text-white justify-content-center  p-1 rounded-3">
    //     <span className="icon">
    //           <BiMap />
    //         </span>
    //     <input
    //       type="text"
    //       placeholder="Where to?"
    //       className="border-0 w-100"
    //       style={{background:"transparent"}}
    //     />
    //   </div>
    //   <p className="icon ms-4 text-white">Egypt</p>
    //  </div>
    //  <div className="d-flex   flex-column ">
    //  <div className="d-flex align-items-center text-white justify-content-start  p-1 rounded-3">
    //     <span className="icon">
    //           <BiMap />
    //         </span>
    //     <input
    //       type="text"
    //       placeholder="Where to?"
    //       className="border-0 w-100"
    //       style={{background:"transparent"}}
    //     />
    //   </div>
    //   <p className="icon text-center">Egypt</p>
    //  </div>
    //  <div className="d-flex   flex-column ">
    //  <div className="d-flex align-items-center text-white justify-content-start  p-1 rounded-3">
    //     <span className="icon">
    //           <BiMap />
    //         </span>
    //     <input
    //       type="text"
    //       placeholder="Where to?"
    //       className="border-0 w-100"
    //       style={{background:"transparent"}}
    //     />
    //   </div>
    //   <p className="icon text-center">Egypt</p>
    //  </div>
    // </div>
  );
}
export default Confirmition;