import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTask } from "../api/tasks.js";
import { useNavigate } from "react-router-dom";

export function CreateTaskModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (taskData) => createTask(taskData),
    onSuccess: () => {
      setName("");
      setDescription("");
      setStatus("TODO");
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      onClose();
      navigate("/tasks");
    },
    onError: (error) => {
      alert("Error creating task: " + error.message);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, description, status });
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <main
          className="bg-white p-6 rounded shadow-lg w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Task name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="TODO">To Do</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={mutation.isPending}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                {mutation.isPending ? "Creating..." : "Create Task"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
