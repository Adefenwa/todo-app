import { Route, Routes } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
import Spinner from "./pages/Spinner";

const Nav = React.lazy(() => import("./pages/Nav"));
const TaskList = React.lazy(() => import("./components/TaskList"));
const TaskDetail = React.lazy(() => import("./pages/TaskDetail"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const ErrorTest = React.lazy(() => import("./pages/ErrorTest"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/tasks"
            element={
              <Suspense fallback={<Spinner />}>
                <TaskList />
              </Suspense>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <Suspense fallback={<Spinner />}>
                <TaskDetail />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Spinner />}>
                <About />
                <Suspense />
              </Suspense>
            }
          />
          <Route path="/error-test" element={<ErrorTest />} />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Spinner />}>
                <Register />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
