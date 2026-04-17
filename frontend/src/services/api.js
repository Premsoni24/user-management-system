import axios from "axios";

const API = axios.create({
  baseURL:"https://user-management-system-jg61.onrender.com/api"
});

// token automatically attach
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = token;
  }

  return req;
});

export default API;