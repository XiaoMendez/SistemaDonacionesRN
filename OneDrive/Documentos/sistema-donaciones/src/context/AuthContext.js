import React, { createContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import API from "../api/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (!token) return setLoading(false);
    setUser({ token });
    setLoading(false);
  };

  const login = async (email, password) => {
    const res = await API.post("/auth/login", { email, password });
    await SecureStore.setItemAsync("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (data) => {
    await API.post("/auth/register", data);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
