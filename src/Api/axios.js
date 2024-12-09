import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-e66ef/us-central1/api",

  // Deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-1-a27q.onrender.com"
});

export {axiosInstance};