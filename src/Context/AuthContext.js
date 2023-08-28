import { createContext ,useState,useEffect} from "react";
import jwtDecode from "jwt-decode";
import {useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  let navigate= useNavigate();




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

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("userToken");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ userData, saveUserData,handleLogout}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
