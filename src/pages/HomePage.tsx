import { useHead } from "@unhead/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTaskModal } from "../components/CreateTaskModal";
import { getCurrentUser } from "../lib/auth";

export default function HomePage() {
  useHead({
    title: "Home - TaskFlow",
    meta: [
      {
        name: "description",
        content: "Welcome to TaskFlow, your ultimate task management app.",
      },
    ],
  });

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = getCurrentUser();
  const isAuthenticated = !!currentUser;

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen relative">
      {isAuthenticated && (
        <button
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

      <h1 className="text-3xl font-bold text-black">
        {isAuthenticated
          ? `Welcome back, ${currentUser.name}!`
          : "Welcome to TaskFlow"}
      </h1>

      <p className="mt-4 text-gray-600">
        {isAuthenticated
          ? "Manage your tasks efficiently and stay organized."
          : "Sign up or log in to start managing your tasks."}
      </p>

      <section className="flex gap-6">
        {!isAuthenticated ? (
          <>
            <button
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 mt-6"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 mt-6"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 mt-6"
              onClick={() => setIsModalOpen(true)}
            >
              Create Todos
            </button>
            <button
              className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 mt-6"
              onClick={() => navigate("/tasks")}
            >
              View Todos
            </button>
          </>
        )}
      </section>

      {isAuthenticated && (
        <CreateTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}
