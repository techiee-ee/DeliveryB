import axios from "axios";

const API = axios.create({
  baseURL: "https://deliverybackend-0i61.onrender.com/api",
  withCredentials: true // IMPORTANT for Google session auth
});

// ---------- AUTH ----------
export const googleLogin = () => {
  window.location.href = "https://deliverybackend-0i61.onrender.com/api/auth/google";
};

// ---------- RESTAURANTS ----------
export const getRestaurants = () => API.get("/restaurants");
export const addRestaurant = (data) => API.post("/restaurants", data);

// ---------- ORDERS ----------
export const getOrders = () => API.get("/orders");
export const placeOrder = (data) => API.post("/orders", data);

export const getMenu = restaurantId =>
  API.get(`/menu/${restaurantId}`);

export const addMenuItem = data =>
  API.post("/menu/add", data);

export const deleteMenuItem = id =>
  API.delete(`/menu/${id}`);
export default API;
