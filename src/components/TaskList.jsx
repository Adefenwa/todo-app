import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/tasks.js";
import { useState } from "react";

const getStatusEmoji = (status) => {
  if (!status) return "";
  const s = String(status).toLowerCase().trim();
  if (s === "done") return "✅";
  if (s === "in progress" || s === "in-progress" || s === "inprogress")
    return "⏳";
  if (s === "todo" || s === "to do" || s === "pending") return "⏸️";
  return "";
};
export function TaskList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks", page],
    queryFn: () => getTasks(page, 10),
  });
  return (
    <div>
      <h1>Task List</h1>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>Error loading tasks: {error.message}</p>}
      {data && (
        <>
          {/* {console.log(data)} */}
          <ul>
            {data.tasks.map((task) => (
              <li key={task.id}>
                {task.name} {getStatusEmoji(task.status)}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={() => setPage(page - 1)}
              disabled={!data.meta.hasPreviousPage}
            >
              Previous
            </button>
            <span>
              Page {data.meta.page} of {data.meta.totalPages}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!data.meta.hasNextPage}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
