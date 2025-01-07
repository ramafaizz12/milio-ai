import axios from 'axios';
import { getToken, removeToken } from 'libs/api-client/token_service';

const apiClient = axios.create({
  baseURL: 'https://milio-monorepo-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log('Token sent in request header:', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token kadaluwarsa atau tidak valid
      // Redirect ke halaman login, misalnya
      window.location.href = '/auth/sign-in-1';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
