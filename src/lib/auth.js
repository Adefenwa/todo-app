export function getCurrentUser() {
  const userJson = localStorage.getItem("user");

  if (!userJson) return null;

  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

export function isAutheticated() {
  return !!localStorage.getItem("authToken");
}
