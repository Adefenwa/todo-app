const BASE_URL = "https://api.oluwasetemi.dev";

export async function apiClient(path, options = {}) {
  const token = localStorage.getItem("authToken");
  const headers = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const response = await fetch(`${BASE_URL}${path}`, {
    headers,
    ...options,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message =
      errorData.message ||
      errorData.error ||
      `API request failed with status ${response.status}`;
    throw new Error(message);
  }

  if (response.status === 204) {
    return { success: true };
  }
  return response.json();
}
