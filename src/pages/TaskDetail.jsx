import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTask, getTask } from "../api/tasks";
import { MoveLeft, Notebook } from "lucide-react";
import { useHead } from "@unhead/react";
import { EditTaskModal } from "../components/EditTaskModal";

function formatDate(value) {
  if (!value) return "";
  let t = value;
  if (typeof t === "string" && /^\d+$/.test(t)) t = Number(t);
  if (typeof t === "number" && t < 1e11) t = t * 1000;
  const d = new Date(t);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n) => String(n).padStart(2, "0");
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  return `${year}/${month}/${day} at ${hours}:${minutes}`;
}

export default function TaskDetail() {
  useHead({
    title: "Task Detail - TaskFlow",
    meta: [
      {
        name: "description",
        content: "View details of a specific task in TaskFlow.",
      },
    ],
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const {
    data: task,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTask(id),
  });

  const deleteMutation = useMutation({
    mutationFn: (taskId) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      navigate("/tasks");
    },
    onError: (error) => {
      alert(`Error deleting task: ${error.message}`);
    },
  });

  const handleDelete = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (confirmed) {
      deleteMutation.mutate(taskId);
    }
  };

  return (
    <main>
      {isLoading && <p>Loading task...</p>}

      {error && (
        <p role="alert" aria-live="assertive">
          Error loading task: {error.message}
        </p>
      )}

      {task && (
        <section className="p-4">
          <div className="w-full lg:w-3/4 lg:flex lg:justify-between lg:items-center">
            <button
              onClick={() => navigate("/tasks")}
              aria-label="Back to Tasks list"
              className="bg-black hover:opacity-75 rounded-md px-5 py-2 text-white font-semibold text-sm transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110"
            >
              <MoveLeft size={14} strokeWidth={1.75} className="inline mr-2" />
              Back to Tasks
            </button>

            <p>Task ID: #{task.id}</p>
          </div>

          <section className="bg-gray-50 w-full lg:w-3/4 my-5 p-3 rounded-md">
            <h1 className="text-3xl font-bold p-2">{task.name}</h1>

            <div className="border-bottom-2 border-solid border-black">
              <p className="mx-3 text-gray-500 mt-2">Status</p>
              <p className="bg-gray-50 mx-3 font-semibold mb-4">
                {task.status}
              </p>
            </div>

            <div>
              <p className="mx-3 text-gray-500 mt-2">Description</p>
              <p className="bg-white mx-3 p-4 flex items-center rounded-md mb-4 border border-solid h-auto">
                <Notebook
                  size={14}
                  strokeWidth={1.75}
                  className="inline mr-2"
                />
                {task.description}
              </p>
            </div>

            <div>
              <p className="mx-3 text-gray-500 mt-2">Created</p>
              <p className="bg-gray-50 mx-3 font-semibold mb-4">
                {formatDate(task.createdAt)}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditModalOpen(true)}
                className="bg-blue-500 text-sm hover:bg-blue-700 text-white px-3 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-600 text-sm hover:bg-red-800 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </section>

          <EditTaskModal
            key={task.id}
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            task={task}
          />
        </section>
      )}
    </main>
  );
}
