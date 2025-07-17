import axios from "axios";
// import Cookies from "js-cookie";
const axiosInstance = axios.create({
  baseURL:
    "https://5gcnosnm2xwqefvxh37w4bbcba0pjupu.lambda-url.ca-central-1.on.aws/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("revve_token");

      // const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status_code === 401 && typeof window !== "undefined") {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

// Utility function for GET requests
export const getData = async (url: any, params: any) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error: any) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

// Utility function for POST requests
export const postData = async (url: any, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

// Utility function for PATCH requests
export const patchData = async (url: any, data: any) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error: any) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

// Utility function for PUT requests
export const putData = async (url: any, data: any) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error: any) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

// Utility function for DELETE requests
export const removeData = async (url: any) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error: any) {
    // Your error handling logic
    console.log(error.message);
    throw error;
  }
};

export const deleteData = async (url: any, data: any) => {
  try {
    const response = await axiosInstance.delete(url, { data });
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};

export default axiosInstance;
