
import axios from "axios";

const BASEURL = "http://localhost:8080";


const api = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("user_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default api;
