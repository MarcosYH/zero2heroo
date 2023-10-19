import axios from 'axios';

const apiBaseUrl = 'zero2hero.emes.bj:5000';

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
