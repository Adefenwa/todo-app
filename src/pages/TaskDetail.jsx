import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getTask } from "../api/tasks";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: task, error } = useQuery({
    queryKey: ["task", id],
    queryFn: () => getTask(id),
  });

  return (
    <main>
      {/* {console.log(task)} */}

      {error && (
        <p role="alert" aria-live="assertive">
          Error loading task: {error.message}
        </p>
      )}
      {task && (
        <section>
          <button
            onClick={() => navigate("/tasks")}
            aria-label="Back to Tasks list"
          >
            Back to Tasks
          </button>
          <h1>{task.name}</h1>
          <p>Status: {task.status}</p>
          <p>Description: {task.description}</p>
        </section>
      )}
    </main>
  );
}
