import { useHead } from "@unhead/react";

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
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-black">Welcome to TaskFlow</h1>
      <p className="mt-4 text-gray-600">
        Manage your tasks efficiently and stay organized.
      </p>
      <section>
        <button
          className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 mt-6"
          onClick={() => (window.location.href = "/tasks")}
        >
          View Todos
        </button>
      </section>
    </main>
  );
}
