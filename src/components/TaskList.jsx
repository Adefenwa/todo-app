import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/tasks.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const getStatusEmoji = (status) => {
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
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { data, error } = useQuery({
    queryKey: ["tasks", page],
    queryFn: () => getTasks(page, 10),
  });

  const filteredTasks =
    data?.tasks.filter((task) => {
      // Search filter
      const matchesSearch = task.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Status filter
      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    }) || [];
  return (
    <main>
      <h1>Task List</h1>
      <div>
        <input
          type="search"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search tasks by name"
        />

        <div role="group" aria-label="Filter tasks by status">
          <button onClick={() => setStatusFilter("all")}>All</button>
          <button onClick={() => setStatusFilter("TODO")}>To Do</button>
          <button onClick={() => setStatusFilter("IN_PROGRESS")}>
            In Progress
          </button>
          <button onClick={() => setStatusFilter("DONE")}>Done</button>
        </div>
      </div>

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
            <ul>
              {filteredTasks.map((task) => (
                <li key={task.id}>
                  <Link
                    to={`/tasks/${task.id}`}
                    aria-label={`View details for ${task.name} status ${task.status}`}
                  >
                    {task.name}{" "}
                    <span aria-hidden="true">
                      {getStatusEmoji(task.status)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <nav aria-label="Pagination navigation for tasks list">
            <button
              onClick={() => setPage(page - 1)}
              disabled={!data.meta.hasPreviousPage}
              aria-label={"Previous page of tasks list"}
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
            >
              Next
            </button>
          </nav>
        </>
      )}
    </main>
  );
}
