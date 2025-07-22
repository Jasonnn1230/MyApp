import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "/api"
  // 部署時用 REACT_APP_API_URL
  // 本地開發時走 proxy "/api"
});

export default api;
