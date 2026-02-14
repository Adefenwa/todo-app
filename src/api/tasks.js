import { apiClient } from "./client";
export async function getTasks(page = 1, limit = 10) {
  const response = await apiClient(`/tasks?page=${page}&limit=${limit}`);
  return { tasks: response.data, meta: response.meta };
}
