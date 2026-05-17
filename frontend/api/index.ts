import axios from "axios";
import baseURL from "./baseUrl";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

type ApiOptions = {
  data?: object,
  method?: "get" | "post" | "put" | "delete",
  params?: object,
};

export const api = async (endpoint: string, options: ApiOptions = {}) => {
  const { data, method = "get", params } = options;

  const accessToken = 'ACCESS_TOKEN'; // Replace with actual token retrieval logic
  
  try {
    const response = await axiosInstance.request({
        data,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        method,
        params,
        responseType: "json",
        url: endpoint,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default api;