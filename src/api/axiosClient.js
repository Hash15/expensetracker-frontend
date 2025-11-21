import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Backend URL
});

// Add Authorization header automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
