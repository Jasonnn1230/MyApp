import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api",
  // Render 部署後用完整 URL
});

export default api;
