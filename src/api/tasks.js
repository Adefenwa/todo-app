import { apiClient } from "./client";
export async function getTasks() {
  const response = await apiClient("/tasks");
  return { tasks: response.data, meta: response.meta };
}
