// libs/auth/auth.context.tsx
'use client';
import { jwtDecode } from 'jwt-decode';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { Signin, Logout } from 'libs/api-client/auth';
import { useRouter } from 'next/navigation';
import { User } from '@/data/users-data';
import { getToken } from 'libs/api-client/token_service';
interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      router.push('/');
    } else {
      router.push('/auth/sign-in-1');
    }
  }, []);

  const handleLogin = async (email: string, password: string) => {
    await Signin(email, password);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    await Logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
