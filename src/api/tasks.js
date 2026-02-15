import { apiClient } from "./client";
export async function getTasks(page = 1, limit = 10) {
  const response = await apiClient(`/tasks?page=${page}&limit=${limit}`);
  return { tasks: response.data, meta: response.meta };
}

export async function getTask(id) {
  const response = await apiClient(`/tasks/${id}`);
  return response;
}

export async function deleteTask(id) {
  const response = await apiClient(`/tasks/${id}`, {
    method: "DELETE",
  });
  return response;
}
