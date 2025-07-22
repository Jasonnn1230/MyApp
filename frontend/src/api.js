import axios from "axios";

const api = axios.create({
  baseURL: "/api" // 不用寫 full URL，React 會走同一個 domain
});

export default api;
