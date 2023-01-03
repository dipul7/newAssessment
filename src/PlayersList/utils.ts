import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.balldontlie.io",
});

axiosInstance.interceptors.response.use(
  async (res: any) => {
    return res;
  },
  (error: any) => {
    throw new Error(error);
  }
);
export const apiRequest = ({ ...options }) => {
  return axiosInstance(options);
};
