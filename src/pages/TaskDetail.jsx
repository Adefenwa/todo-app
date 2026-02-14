import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getTask } from "../api/tasks";

export function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: task,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTask(id),
  });

  return (
    <div>
      {console.log(task)}
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>Error loading tasks: {error.message}</p>}
      {task && (
        <div>
          <button onClick={() => navigate("/tasks")}>Back to Tasks</button>
          <h1>{task.name}</h1>
          <p>Status: {task.status}</p>
          <p>Description: {task.description}</p>
        </div>
      )}
    </div>
  );
}
