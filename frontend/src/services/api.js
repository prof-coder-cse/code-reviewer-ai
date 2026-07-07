import axios from "axios";

const api = axios.create({
  baseURL: "https://code-reviewer-ai-4rcm.onrender.com",
});

export default api;
