import axios from "axios";

const axiosInstance  = axios.create({
  //baseURL: "http://127.0.0.1:5001/clone-9fe1f/us-central1/api",
  baseURL: "https://amazon-deploy-pcf5.onrender.com/"
});

export { axiosInstance  };
