import apiClient from './index';

import { setToken, removeToken, getToken } from 'libs/api-client/token_service';

export const Signin = async (email: string, password: string) => {
  const response = await apiClient.post(`auth/login`, {
    email: email,
    password: password,
  });
  console.log('Response from login API:', response.data);
  const { token } = response.data;
  console.log(token);
  setToken(token);
  return response;
};

export const Logout = async () => {
  await apiClient.post(`auth/logout`);
  removeToken();
};

export const Forgotpassword = (email: string) => {
  return apiClient.post(`auth/forgot-password`, {
    email: email,
  });
};

export const Updatepassword = (password: string) => {
  return apiClient.post(`auth/update-password`, {
    newPassword: password,
  });
};
