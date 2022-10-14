import axios from "axios";

export default axios.create({
  baseURL: process.env.api || "http://localhost:3000/api",
});
