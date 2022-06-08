import axios from "axios";

const axiosConfig = {
  baseURL: "https://api.github.com/",
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
  async (res) => {
    console.log("API response", res.data);
    return res;
  },
  (err) => {
    throw err;
  }
);

const API = instance;

export { API };
