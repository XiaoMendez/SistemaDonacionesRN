import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API = axios.create({
  baseURL: "http://192.168.0.12:5000/api",
});

API.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
