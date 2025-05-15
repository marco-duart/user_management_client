import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { UserDTO } from "../services/user/DTO";
import { LoginService, MeService } from "../services/auth/index";
import { env } from "../config/env";

type AuthUser = UserDTO.Model;

type State = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
};

type AuthContextType = {
  user: AuthUser | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  updateUser: (user: AuthUser, token: string) => void;
  isAdmin: () => boolean;
};

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  loading: false,
  login: async () => false,
  logout: () => {},
  refreshUser: async () => {},
  updateUser: () => {},
  isAdmin: () => false,
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({
    user: null,
    token: null,
    loading: true,
  });

  const setLoading = (loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  };

  const refreshUser = async () => {
    if (!state.token) return;

    try {
      const response = await MeService({ token: state.token });

      if (!response.success || !response.data) {
        toast.error(response.message);
        return cleanUser();
      }

      setState((prev) => ({
        ...prev,
        user: response.data,
      }));
    } catch (error) {
      cleanUser();
    }
  };

  const updateUser = (user: AuthUser, token: string) => {
    localStorage.setItem(env.LOCALSTORAGE_TOKEN_KEY, token);
    setState({ user, token, loading: false });
  };

  const cleanUser = () => {
    localStorage.removeItem(env.LOCALSTORAGE_TOKEN_KEY);
    setState({ user: null, token: null, loading: false });
  };

  const isAdmin = () => {
    return state.user?.role === UserDTO.Role.ADMIN;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await LoginService({ email, password });

      if (!response.success || !response.data) {
        toast.error(response.message);
        return false;
      }

      const token = response.data.token;
      const meResponse = await MeService({ token });

      if (!meResponse.success || !meResponse.data) {
        toast.error(meResponse.message);
        return false;
      }

      updateUser(meResponse.data, token);
      toast.success("Login realizado com sucesso!");
      return true;
    } finally {
      setLoading(false);
    }
  };

  const autoLogin = async () => {
    const token = localStorage.getItem(env.LOCALSTORAGE_TOKEN_KEY);
    if (!token) return cleanUser();

    try {
      const response = await MeService({ token });

      if (!response.success || !response.data) {
        toast.error(response.message);
        return cleanUser();
      }

      updateUser(response.data, token);
    } catch (error) {
      cleanUser();
    }
  };

  const logout = () => {
    cleanUser();
    toast.success("Logout realizado com sucesso!");
  };

  useEffect(() => {
    if (!state.user) {
      autoLogin();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        login,
        logout,
        refreshUser,
        updateUser,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
