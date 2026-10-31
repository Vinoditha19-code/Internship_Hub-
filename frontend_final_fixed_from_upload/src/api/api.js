// frontend_final_fixed_from_upload/src/api/api.js
// frontend_final_fixed_from_upload/src/api/api.js
// Axios instance with base URL and token handling


import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
