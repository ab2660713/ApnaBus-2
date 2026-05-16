import axios from "axios";

const api = axios.create({
  baseURL: "https://apnabus-2-2.onrender.com/",
});

export default api;
