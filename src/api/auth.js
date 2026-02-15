import { apiClient } from "./client";

export async function register(userData) {
  //   userData = { email, password, name };
  const response = await apiClient("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
  return response;
}

export async function login(credentials) {
  const response = await apiClient("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return response;
}

export async function logout() {
  const response = await apiClient("/auth/logout", {
    method: "POST",
  });
  return response;
}
