import apiClient from './index';

import { setToken, removeToken, getToken } from 'libs/api-client/token_service';
import { setUser, removeUser } from 'libs/api-client/user_service';
export const Signin = async (email: string, password: string) => {
  const response = await apiClient.post(`auth/login`, {
    email: email,
    password: password,
  });
  console.log('Response from login API:', response.data);
  const { token, user } = response.data;
  setToken(token);
  setUser(user);
  return response;
};

export const Signup = async (email: string, password: string) => {
  const response = await apiClient.post(`auth/signup`, {
    email: email,
    password: password,
  });
  console.log('Calling Signup API with:', email, password);
  return response;
};

export const Logout = async () => {
  await apiClient.post(`auth/logout`);
  removeToken();
  removeUser();
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

export const Changepassword = (oldpassword: string, newpassword: string) => {
  return apiClient.put(`auth/change-password`, {
    oldPassword: oldpassword,
    newPassword: newpassword,
  });
};
