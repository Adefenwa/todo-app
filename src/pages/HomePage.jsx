import { useHead } from "@unhead/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateTaskModal } from "../components/CreateTaskModal";

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
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-black">Welcome to TaskFlow</h1>
      <p className="mt-4 text-gray-600">
        Manage your tasks efficiently and stay organized.
      </p>
      <section className="flex gap-6">
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
      </section>
      <CreateTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
