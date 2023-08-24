import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Login from "./components/login/Login";
// import Profile from "./components/profile/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation/Navigation";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import AuthContextProvider from "./Context/AuthContext";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyCode from "./pages/VerifyCode/VerifyCode";

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <AuthContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/hotels" element={<HotelDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
