import { CgProfile } from "react-icons/cg";
import { MdPayment, MdSecurity } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbTicket } from "react-icons/tb";
import PersonalImage from "../../assets/imgs/profile.jpeg";
import Brush from "../../assets/imgs/brush-icon.png";
import "./profile.css";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
 
export default function Profile() {
  const [isMenuOpend, setIsMenuOpend] = useState(true);
 
  return (
    <div className="profile">
      <SideBar isMenuOpend={isMenuOpend} setIsMenuOpend={setIsMenuOpend} />
      <Section isMenuOpend={isMenuOpend} setIsMenuOpend={setIsMenuOpend} />
    </div>
  );
}
function SideBar({ isMenuOpend, setIsMenuOpend }) {
  const { userData, handleLogout } = useContext(AuthContext);
 
  const Logout = () => {
    handleLogout();
    toast.success("Logged out successfully!", {
      duration: 2000,
      className: "text-secondary px-4 fw-bolder",
      iconTheme: {
        primary: "#ff9900",
      },
    });
  };
  return (
    <div className={!isMenuOpend ? "sidebar sidebar-close" : "sidebar"}>
      {isMenuOpend && (
        <p onClick={() => setIsMenuOpend((e) => !e)} className="close">
          &times;
        </p>
      )}
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
function Section({ isMenuOpend, setIsMenuOpend }) {
  const [edit, setEdit] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const [picture, setPicture] = useState("");
  // const {userData,handleLogout,token} = useContext(AuthContext);
 
  // console.log(token);
 
  const jwt_token = Cookies.get("jwt_token");
 
  console.log(jwt_token);
 
  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        "https://bookazon.tadafoq.com/api/auth/user-profile",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`, // إرسال التوكن في عنوان التوجيه (Authorization header)
          },
        }
      );
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEmail(response.data.email);
      setPhoneNumber(response.data.phone_number || "");
      setAdress(response.data.address);
      setPicture(response.data.profile_picture);
      console.log(response.data);
    } catch (error) {
      console.error("حدث خطأ أثناء جلب بيانات البروفايل:", error);
    }
  };
  useEffect(() => {
    if (jwt_token) {
      // إذا تم تعيين التوكن، قم بجلب بيانات البروفايل باستخدام التوكن
      fetchProfileData();
    }
  }, [jwt_token]);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEdit((e) => false);
    let payload = new FormData();
    payload.append("first_name", firstName);
    payload.append("last_name", lastName);
    payload.append("email", email);
    payload.append("phone_number", phoneNumber);
    payload.append("address", address);
    // payload.append('profile_picture',"")
 
    try {
      const response = await axios({
        method: "post",
        url: "https://bookazon.tadafoq.com/api/auth/update",
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwt_token}`,
        },
      });
 
      if (response.status === 200) {
        // Profile update successful
        console.log("Profile updated successfully");
        toast.success(response.data.message, {
          duration: 2000,
          className: "text-secondary px-4 fw-bolder",
          iconTheme: {
            primary: "#ff9900",
          },
        });
      } else {
        // Handle error response
 
        console.error("Profile update failed");
      }
    } catch (error) {
      // Handle network or other errors
      toast.error("Failed to update profile", {
        duration: 2000,
        className: "text-danger px-4 fw-bolder",
      });
      console.error("An error occurred", error);
    }
  };
 
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setEdit((e) => !e);
  // }
  const [imageModal, setImageModal] = useState(false);
  const [personalImage, setPersonalImage] = useState(PersonalImage);
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let file=e.target.files[0]
    
      setSelectedImage(file)
  
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          let updateImage = reader.result 
          setPersonalImage(updateImage);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
    setImageModal(true);
  }
  return (
    <div className={isMenuOpend ? " section section-close" : "section"}>
      {!isMenuOpend && (
        <p className="burger close" onClick={() => setIsMenuOpend((e) => !e)}>
          ☰
        </p>
      )}
      <h4>Edit Profile</h4>
      <div className="image position-relative">
        <img src={personalImage} alt="profile" className="rounded-circle" />
        {/* <a href="./">
          <img src={Brush} className="profile-edit-icon" alt="brush-icon" />
        </a> */}
        <label htmlFor="contained-button-file">
        <input
          accept="image/*"
          type="file"
           onChange={imageChange}
         className="uploedImage position-absolute bottom-0  "
        />
         <img src={Brush} className="profile-edit-icon" alt="brush-icon" />
      </label>
      </div>
      <form className=" mt-5 ">
        <div className="form-group name-form">
          <div className="w-50">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="form-control"
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={!edit}
            />
          </div>
          <div className="w-50">
            <label htmlFor="secondName">Second Name</label>
            <input
              id="secondName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              disabled={!edit}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            aria-describedby="emailHelp"
            disabled={!edit}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            disabled={!edit}
            value={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Contact Number</label>
          <input
            type="number"
            className="form-control"
            id="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            disabled={!edit}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAdress(e.target.value)}
            disabled={!edit}
          />
        </div>
        <div className="form-group">
          {edit ? (
            <button
              type="submit"
              className="btn btn-primary btn-sumbit"
              onClick={(e) => handleSubmit(e)}
            >
              save
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary btn-sumbit"
              onClick={(e) => {
                e.preventDefault();
                setEdit((e) => !e);
              }}
            >
              edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}


// import { CgProfile } from "react-icons/cg";
// import { MdPayment, MdSecurity } from "react-icons/md";
// import { TfiHelpAlt } from "react-icons/tfi";
// import { FiEye } from "react-icons/fi";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { TbLogout } from "react-icons/tb";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { TbTicket } from "react-icons/tb";
// import ProfileImage from "../../assets/imgs/profile.jpeg";
// import Brush from "../../assets/imgs/brush-icon.png";
// import "./profile.css";
// import { useState, useContext, useEffect } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import Cookies from "js-cookie";

// export default function Profile() {
//   return (
//     <div className="profile">
//       <SideBar />
//       <Section />
//     </div>
//   );
// }
// function SideBar() {
//   const { userData, handleLogout } = useContext(AuthContext);

//   const Logout = () => {
//     handleLogout();
//     toast.success("Logged out successfully!", {
//       duration: 2000,
//       className: "text-secondary px-4 fw-bolder",
//       iconTheme: {
//         primary: "#ff9900",
//       },
//     });
//   };
//   return (
//     <div className="sidebar">
//       <h4>My Profile</h4>
//       <a href="./" className="link">
//         <p>
//           <CgProfile className="icon" />
//           Edit Profile
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <TbTicket className="icon" />
//           My Booking
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <MdPayment className="icon" />
//           Payment
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <IoNotificationsOutline className="icon" />
//           Notifications
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <MdSecurity className="icon" />
//           Security
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <TfiHelpAlt className="icon" />
//           Help
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <FiEye className="icon" />
//           Dark Theme
//         </p>
//       </a>
//       <a href="./" className="link">
//         <p>
//           <RiDeleteBinLine className="icon" />
//           Delete Account
//         </p>
//       </a>
//       {userData ? (
//         <a onClick={Logout}>
//           <TbLogout className="icon" /> Logout
//         </a>
//       ) : null}
//     </div>
//   );
// }
// function Section() {
//   const [edit, setEdit] = useState(true);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAdress] = useState("");
//   const [picture, setPicture] = useState("");
//   // const {userData,handleLogout,token} = useContext(AuthContext);

//   // console.log(token);

//   const jwt_token = Cookies.get("jwt_token");

//   console.log(jwt_token);

//   const fetchProfileData = async () => {
//     try {
//       const response = await axios.get(
//         "https://bookazon.tadafoq.com/api/auth/user-profile",
//         {
//           headers: {
//             Authorization: `Bearer ${jwt_token}`, // إرسال التوكن في عنوان التوجيه (Authorization header)
//           },
//         }
//       );
//       setFirstName(response.data.first_name);
//       setLastName(response.data.last_name);
//       setEmail(response.data.email);
//       setPhoneNumber(response.data.phone_number || "");
//       setAdress(response.data.address);
//       setPicture(response.data.profile_picture);
//       console.log(response.data);
//     } catch (error) {
//       console.error("حدث خطأ أثناء جلب بيانات البروفايل:", error);
//     }
//   };
//   useEffect(() => {
//     if (jwt_token) {
//       // إذا تم تعيين التوكن، قم بجلب بيانات البروفايل باستخدام التوكن
//       fetchProfileData();
//     }
//   }, [jwt_token]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setEdit((e) => false);
//     let payload = new FormData()
//     payload.append("first_name", firstName)
//     payload.append('last_name', lastName)
//     payload.append('email', email)
//     payload.append('phone_number', phoneNumber)
//     payload.append('address', address)    
//     // payload.append('profile_picture',"")

//     try {

//       const response = await axios({
//         method: "post",
//         url: "https://bookazon.tadafoq.com/api/auth/update",
//         data: payload,
//         headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${jwt_token}` },
//       })

//       if (response.status === 200) {
//         // Profile update successful
//         console.log("Profile updated successfully");
//         toast.success(response.data.message, {
//           duration: 2000,
//           className: "text-secondary px-4 fw-bolder",
//           iconTheme: {
//             primary: "#ff9900",
//           },
//         });
//       } else {
//         // Handle error response
        
//         console.error("Profile update failed");
//       }
//     } catch (error) {
//       // Handle network or other errors
//       toast.error("Failed to update profile", {
//         duration: 2000,
//         className: "text-danger px-4 fw-bolder",
//       });
//       console.error("An error occurred", error);
//     }
//   };

//   // function handleSubmit(e) {
//   //   e.preventDefault();
//   //   setEdit((e) => !e);
//   // }

//   return (
//     <div className="section ">
//       <h4>Edit Profile</h4>
//       <div className="image">
//         <img src={ProfileImage} alt="profile" className="rounded-circle" />
//         <a href="./">
//           <img src={Brush} className="profile-edit-icon" alt="brush-icon" />
//         </a>
//       </div>
//       <form className=" mt-5 ">
//         <div className="form-group name-form">
//           <div className="w-50">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               id="firstName"
//               type="text"
//               className="form-control"
//               placeholder="FirstName"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               disabled={!edit}
//             />
//           </div>
//           <div className="w-50">
//             <label htmlFor="secondName">Second Name</label>
//             <input
//               id="secondName"
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               className="form-control"
//               disabled={!edit}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="email"
//             aria-describedby="emailHelp"
//             disabled={!edit}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             onChange={(e) => setPassword(e.target.value)}
//             disabled={!edit}
//             value={password}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="number">Contact Number</label>
//           <input
//             type="number"
//             className="form-control"
//             id="number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             disabled={!edit}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="address"
//             value={address}
//             onChange={(e) => setAdress(e.target.value)}
//             disabled={!edit}
//           />
//         </div>
//         <div className="form-group">
//           {edit ? (
//             <button
//             type="submit"
//             className="btn btn-primary btn-sumbit"
//             onClick={(e) => handleSubmit(e)}
//           >
//             save
//           </button>
//           ):<button
//           type="submit"
//           className="btn btn-primary btn-sumbit"
//           onClick={(e)=>{
//             e.preventDefault()
//             setEdit((e) => !e)
//           }}
//         >
//           edit
//         </button>}
//         </div>
//       </form>
//     </div>
//   );
// }
