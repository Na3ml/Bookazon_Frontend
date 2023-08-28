import { CgProfile } from "react-icons/cg";
import { MdPayment, MdSecurity } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbTicket } from "react-icons/tb";
import ProfileImage from "../../assets/imgs/profile.jpeg";
import Brush from "../../assets/imgs/brush-icon.png";
import "./profile.css";
import { useState ,useContext} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";

export default function Profile() {
  return (
    <div className="profile">
      <SideBar />
      <Section />
    </div>
  );
}
function SideBar() {

  const {userData,handleLogout} = useContext(AuthContext);


  const Logout=()=>{
    handleLogout();
    toast.success("Logged out successfully!", {
      duration: 2000,
      className: "text-secondary px-4 fw-bolder",
      iconTheme: {
        primary: '#ff9900',
      }
  }
  );
}
  return (
    <div className="sidebar">
      <h4>My Profile</h4>
      <a href="./" className="link">
        <p>
          <CgProfile className="icon" />
          Edit Profile
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <TbTicket className="icon" />
          My Booking
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <MdPayment className="icon" />
          Payment
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <IoNotificationsOutline className="icon" />
          Notifications
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <MdSecurity className="icon" />
          Security
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <TfiHelpAlt className="icon" />
          Help
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <FiEye className="icon" />
          Dark Theme
        </p>
      </a>
      <a href="./" className="link">
        <p>
          <RiDeleteBinLine className="icon" />
          Delete Account
        </p>
      </a>
      {userData ? (
        <a onClick={Logout}>
          <TbLogout className="icon" /> Logout
        </a>
      ) : null}
    </div>
  );
}
function Section() {
  const [edit, setEdit] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setEdit((e) => !e);
  }

  return (
    <div className="section ">
      <h4>Edit Profile</h4>
      <div className="image">
        <img src={ProfileImage} alt="profile" className="rounded-circle" />
        <a href="./">
          <img src={Brush} className="profile-edit-icon" alt="brush-icon" />
        </a>
      </div>
      <form className=" mt-5 ">
        <div class="form-group name-form">
          <div className="w-50">
            <label for="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              placeholder="FirstName"
              disabled={edit}
            />
          </div>
          <div className="w-50">
            <label for="secondName">Second Name</label>
            <input
              id="secondName"
              type="text"
              className="form-control"
              placeholder="SecondName"
              disabled={edit}
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            disabled={edit}
          />
        </div>
        <div class="form-group">
          <label for="password">password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="12345678"
            disabled={edit}
          />
        </div>
        <div class="form-group">
          <label for="number">Contact Number</label>
          <input
            type="number"
            class="form-control"
            id="number"
            placeholder="0102345678"
            disabled={edit}
          />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Cairo"
            disabled={edit}
          />
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary btn-sumbit"
            onClick={(e) => handleSubmit(e)}
          >
            {edit ? "Edit" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
