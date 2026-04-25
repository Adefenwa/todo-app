import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTasks, deleteTask } from "../api/tasks";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHead } from "@unhead/react";
import { getCurrentUser } from "../lib/auth";

type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";
const getStatusEmoji = (status: TaskStatus) => {
  switch (status) {
    case "TODO":
      return "⏳";
    case "IN_PROGRESS":
      return "🚧";
    case "DONE":
      return "✅";
  }
};
export default function TaskList() {
  useHead({
    title: "Task List - TaskFlow",
    meta: [
      {
        name: "description",
        content: "View and manage your tasks in TaskFlow.",
      },
    ],
  });
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  if (!currentUser) {
    navigate("/login");
    return null;
  }

  const deleteMutation = useMutation({
    mutationFn: (taskId) => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks", page] });
      // navigate("/tasks");
    },
    onError: (error) => {
      alert(`Error deleting task: ${error.message}`);
    },
  });
  const { data, error } = useQuery({
    queryKey: ["tasks", page],
    queryFn: () => getTasks(page, 10),
  });

  const handleDelete = (taskId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (confirmed) {
      deleteMutation.mutate(taskId);
    }
  };

  const filteredTasks =
    data?.tasks.filter((task) => {
      const isMyTask = task.owner === currentUser?.id;

      const matchesSearch = task.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;

      return isMyTask && matchesSearch && matchesStatus;
    }) || [];
  return (
    <main className="p-5 border border-solid">
      <h1 className="text-2xl font-bold text-black">Task List</h1>
      <p>Click on a todo list to view or delete it.</p>
      <section
        className="border-2 border-solid w-full lg:flex lg:justify-between lg:gap-4 lg:items-center my-4 p-2 lg:w-3/4 bg-gray-50 rounded-md"
        // className="my-4 flex justify-left items-center gap-5 p-2 w-2/3 bg-gray-50 border border-solid rounded-md"
      >
        <input
          // className="w-2/4 border border-solid p-2 rounded-md"
          className="w-full border border-solid p-2 rounded-lg my-2 lg:w-2/4"
          type="search"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search tasks by name"
        />

        <div
          role="group"
          aria-label="Filter tasks by status"
          // className="flex gap-3 justify-between items-center"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <button
            onClick={() => setStatusFilter("all")}
            className="bg-black hover:bg-gray-800 text-sm text-white font-medium py-2 px-4 rounded "
          >
            All
          </button>
          <button
            onClick={() => setStatusFilter("TODO")}
            className="bg-black hover:bg-gray-800 text-sm text-white font-medium py-2 px-4 rounded "
          >
            To Do
          </button>
          <button
            onClick={() => setStatusFilter("IN_PROGRESS")}
            className="bg-black hover:bg-gray-800 text-sm text-white font-medium py-2 px-4 rounded "
          >
            In Progress
          </button>
          <button
            onClick={() => setStatusFilter("DONE")}
            className="bg-black hover:bg-gray-800 text-sm text-white font-medium py-2 px-4 rounded "
          >
            Done
          </button>
        </div>
      </section>

      {error && (
        <p role="alert" aria-live="assertive">
          Error loading tasks: {error.message}
        </p>
      )}
      {data && (
        <>
          {/* {console.log(data)} */}
          {filteredTasks.length === 0 && (
            <p>No tasks found matching your search and filter criteria.</p>
          )}
          {filteredTasks.length > 0 && (
            <ul className="border border-solid my-4 p-2 w-full lg:w-3/4 rounded-md">
              {filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className="w-full bg-gray-50 border border-solid  p-4 rounded-md mb-2 flex gap-2 items-center justify-between hover:bg-gray-100 transition duration-200"
                >
                  <Link
                    className="flex gap-3"
                    to={`/tasks/${task.id}`}
                    aria-label={`View details for ${task.name} status ${task.status}`}
                  >
                    {task.name}{" "}
                    <span aria-hidden="true">
                      {getStatusEmoji(task.status)}
                    </span>
                  </Link>
                  <div className="flex gap-5 items-center">
                    <Link
                      to={`/tasks/${task.id}`}
                      className="bg-black text-white text-sm hover:bg-gray-600 px-3 py-1 rounded-md"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="bg-red-600 text-sm hover:bg-red-800 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <nav
            aria-label="Pagination navigation for tasks list"
            className="flex gap-2 items-center w-full justify-between lg:w-3/4"
          >
            <button
              onClick={() => setPage(page - 1)}
              disabled={!data.meta.hasPreviousPage}
              aria-label={"Previous page of tasks list"}
              className={`px-4 py-2 text-sm rounded-md cursor-pointer ${!data.meta.hasPreviousPage ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"}`}
            >
              Previous
            </button>
            <span aria-live={"polite"} aria-atomic={"true"}>
              Page {data.meta.page} of {data.meta.totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!data.meta.hasNextPage}
              aria-label={"Next page of tasks list"}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer ${!data.meta.hasNextPage ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800"}`}
            >
              Next
            </button>
          </nav>
        </>
      )}
    </main>
  );
}
