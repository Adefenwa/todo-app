import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (credentials) => login(credentials),
    onSuccess: (data) => {
      // console.log("=== FULL LOGIN RESPONSE ===");
      // console.log(data);
      // console.log("Keys in response:", Object.keys(data));
      // console.log("===================");

      localStorage.setItem("authToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
      window.location.reload();
    },
    onError: (error) => {
      alert(`Login failed: ${error.message}`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
    // console.log("Login attempted", { email, password });
  };
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login to TaskFlow</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email input"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password input"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={mutation.isPending}
            className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110"
          >
            {mutation.isPending ? "Logging in" : "Login"}
          </button>
          <button
            className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded transition delay-150 duration-300 ease-in-out hover:translate-y-0.5 hover:scale-110 mt-6"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
}
