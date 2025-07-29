import axios from "axios";
// import Cookies from "js-cookie";
export const API_BASE_URL = "https://prod.revveme.com/v1/"; //PRODUCTION
// export const API_BASE_URL = "https://dev.revveme.com/v1"; ///LOCAL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const WEBSITE_KEY =
  "eyJhbGciOi637748583hdydb36bc93f.eyJpZCI6IjIyIiwidXNlcmlkIjoiMjIiLCJ2YWxpZCI6IjEiLCJuYW1lIjoibG9naW4iLCJpYXQiOjE3MDc0NjQwNDksImV4cCI6MTcwNzQ2NzY0OSwiYXVkIjoiaHR0cHM6Ly9vajdyY2hndHZtczVuN3A1NDVjM3RoejVsdTBranp5cC5sYW1iZGEtdXJsLnVzLWVhc3QtMi5vbi5hd3MiLCJpc3MiOiJodHRwczovL29qN3JjaGd0dm1zNW43cDU0NWMzdGh6NWx1MGtqenlwLmxhbWJkYS11cmwudXMtZWFzdC0yLm9uLmF3cyJ9.ncvhhUJEHSNUSS-sbjJDUISBNCV&93u72048";
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("revve_token");

      // const token = localStorage.getItem("token");
      if (token || WEBSITE_KEY) {
        config.headers.Authorization = `Bearer ${token || WEBSITE_KEY}`;
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
