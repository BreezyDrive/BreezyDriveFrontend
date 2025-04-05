import axios from "axios";
import { handleApiError } from "./handleError";

const API_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_BACKEND_API_DEVELOPMENT_URL
    : import.meta.env.VITE_BACKEND_API_PRODUCTION_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // Handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorMessage = handleApiError(error);
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject(new Error("Không thể kết nối đến máy chủ. Vui lòng thử lại sau."));
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(new Error("Đã xảy ra lỗi. Vui lòng thử lại sau."));
    }
  }
);

export default axiosClient;