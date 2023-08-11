import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import PopularHotel from "./components/popularHotel";
// import Home from "./pages/Home"
const App = () => {
  return (
    <div>
    {/* <PopularHotel/> */}
    {/* <Home/> */}
      <SignIn />
      <SignUp />
    </div>
  );
};

export default App;
