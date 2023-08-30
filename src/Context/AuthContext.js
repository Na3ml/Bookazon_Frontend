import { createContext, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");
  let navigate = useNavigate();

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

  //solve reload page
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  useEffect(() => {
    // Load token and user data from localStorage on component mount
    const storedToken = localStorage.getItem("userToken");
    const storedUserData = localStorage.getItem("userData");
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userToken");
    Cookies.remove("jwt_token");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider
      value={{ userData, saveUserData, handleLogout, token }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
