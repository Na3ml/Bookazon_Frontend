import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import PaymentDetails from "./components/paymentCopm/paymentDetails/PaymentDetails";
import Profile from "./components/profile/Profile";
import Footer from "./components/Footer/Footer";
import RoomDetails from "./pages/RoomDetails";
import Details from "./pages/Details";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import SearchResult from "./pages/SearchResult";

const App = () => {
  return (
    <>
      <Toaster />
      <HashRouter>
        <AuthContextProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/payment" element={<ProtectedRoute><PaymentDetails  /></ProtectedRoute>} /> */}

            <Route path="/hotel-details" element={<ProtectedRoute><HotelDetails /></ProtectedRoute>} />
            <Route path="/hotel-details/room-details" element={<ProtectedRoute><RoomDetails/></ProtectedRoute>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/confirmation" element={<Confirmation/>} />
            <Route path="search-result" element={<SearchResult/>} />

          </Routes>
          <Footer />
        </AuthContextProvider>
      </HashRouter>
    </>
  );
};

export default App;
