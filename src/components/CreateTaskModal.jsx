import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function CreateTaskModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("TODO");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (taskData) => createTask(taskData),
    onSuccess: () => {
      setName("");
      setDescription("");
      setStatus("TODO");
      queryClient.invalidateQueries("tasks");
      onClose();
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
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    ></div>
    <main className="fixed inset-0 flex items-center justify-center z-50" onClick={(e) => e.stopPropagation()}>
      
    </main>
    // <div className="modal-overlay" onClick={onClose}>
    //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    //     <h2>Create New Task</h2>
    //     <form onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         placeholder="Task name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //       />
    //       <textarea
    //         placeholder="Task description"
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //       />
    //       <select value={status} onChange={(e) => setStatus(e.target.value)}>
    //         <option value="TODO">To Do</option>
    //         <option value="IN_PROGRESS">In Progress</option>
    //         <option value="DONE">Done</option>
    //       </select>
    //       <button type="submit">Create Task</button>
    //     </form>
    //   </div>
    // </div>
  );
}
