import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/tasks.js";

const getStatusEmoji = (status) => {
  if (!status) return "";
  const s = String(status).toLowerCase().trim();
  if (s === "done") return "✅";
  if (s === "in progress" || s === "in-progress" || s === "inprogress") return "⏳";
  if (s === "todo" || s === "to do" || s === "pending") return "⏸️";
  return "";
};
export function TaskList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  return (
    <div>
      <h1>Task List</h1>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>Error loading tasks: {error.message}</p>}
      {data && (
        <ul>
          {data.tasks.map((task) => (
            <li key={task.id}>
              {task.name} {getStatusEmoji(task.status)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
