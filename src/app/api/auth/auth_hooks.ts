// libs/auth/auth.hooks.ts
import { useState, useEffect } from 'react';
// import { login, logout } from './auth.service';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const handleLogin = async (email: string, password: string) => {
    // await login(email, password);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login: handleLogin, logout: handleLogout };
};
