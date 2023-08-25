import axios from "axios";

const baseInstance = axios.create({
  baseURL: "https://bookazon.tadafoq.com/api/auth/",
});

export default baseInstance;
