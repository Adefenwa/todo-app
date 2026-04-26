import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createTask } from "../api/tasks";
import { useNavigate } from "react-router-dom";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

interface CreateTaskData {
  name: string;
  description: string;
  status: TaskStatus;
}
export function CreateTaskModal({ isOpen, onClose }: CreateTaskModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("TODO");
  // const [owner, setOwner] = useState(null);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (taskData: CreateTaskData) => {
      // console.log("=== CREATING TASK ===");
      // console.log("Task data being sent:", taskData);
      // console.log("Token RIGHT NOW:", localStorage.getItem("authToken"));
      // console.log("===================");
      return createTask(taskData);
    },
    onSuccess: () => {
      // console.log("=== TASK CREATED ===");
      // console.log("Response:", data);
      // console.log("Owner:", data?.owner);
      // console.log("===================");
      setName("");
      setDescription("");
      setStatus("TODO");
      // setOwner(data?.owner || null);
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
        exact: false,
      });
      onClose();
      navigate("/tasks");
    },
    onError: (error) => {
      alert("Error creating task: " + error.message);
    },
  });
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutation.mutate({ name, description, status });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // MANUAL LOG TO SEE WHAT IS ACTUALLY IN STORAGE
  //   console.log("Current Token in Storage:", localStorage.getItem("authToken"));

  //   // TEMPORARY MANUAL FETCH TEST
  //   const testResponse = await fetch("https://api.oluwasetemi.dev/tasks", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  //     },
  //     body: JSON.stringify({ name, description, status }),
  //   });
  //   const testData = await testResponse.json();
  //   console.log("Manual Test Result:", testData);
  // };
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
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
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
