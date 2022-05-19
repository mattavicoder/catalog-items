import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:30336/catalogapi/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const responseBody = (response: AxiosResponse) => response.data;

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    const { data, status } = error.response!;

    switch (status) {
      case 400:
        toast.error("Bad Request");
        break;
      case 401:
        toast.error("UnAuthorized");
        break;
      case 404:
        toast.error("Not Found");
        break;
      case 500:
        toast.error("Servre Error");
        break;
    }

    return Promise.reject(error);
  }
);

const AxiosRequests = {
  get: (url: string) => axiosInstance.get(url).then(responseBody),
  post: (url: string, body: {}) =>
    axiosInstance.post(url, body).then(responseBody),
  put: (url: string, body: {}) =>
    axiosInstance.put(url, body).then(responseBody),
  delete: (url: string) => axiosInstance.delete(url).then(responseBody),
};

export default AxiosRequests;
