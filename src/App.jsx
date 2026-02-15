import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Spinner from "./pages/Spinner.jsx";

const Nav = React.lazy(() => import("./pages/Nav.jsx"));
const TaskList = React.lazy(() => import("./components/TaskList.jsx"));
const TaskDetail = React.lazy(() => import("./pages/TaskDetail.jsx"));
const HomePage = React.lazy(() => import("./pages/HomePage.jsx"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.jsx"));
const ErrorTest = React.lazy(() => import("./pages/ErrorTest.jsx"));
const Login = React.lazy(() => import("./pages/Login.jsx"));
const Register = React.lazy(() => import("./pages/Register.jsx"));

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
          <Route path="/about" element={<div>About Page</div>} />
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
