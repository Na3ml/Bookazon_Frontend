import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation/Navigation";
import HotelDetails from "./pages/HotelDetails/HotelDetails";

import ForgetPassword from "./pages/ForgetPassword";
import AuthContextProvider from "./Context/AuthContext";
import ResetPassword from "./pages/ResetPassword";
import VerifyCode from "./pages/VerifyCode";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"   

import PaymentDetails from "./components/paymentCopm/paymentDetails/PaymentDetails";
import Profile from "./components/profile/Profile";
import Footer from "./components/Footer/Footer";


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
            <Route path="/hotels" element={<ProtectedRoute><HotelDetails /></ProtectedRoute>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><PaymentDetails  /></ProtectedRoute>} />
          </Routes>
            <Footer/>
        </AuthContextProvider>

   

      </BrowserRouter>
      
    </>
  );
};

export default App;
