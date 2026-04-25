import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Spinner from "./pages/Spinner.js";

const Nav = React.lazy(() => import("./pages/Nav.js"));
const TaskList = React.lazy(() => import("./components/TaskList.js"));
const TaskDetail = React.lazy(() => import("./pages/TaskDetail.js"));
const HomePage = React.lazy(() => import("./pages/HomePage.js"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.js"));
const ErrorTest = React.lazy(() => import("./pages/ErrorTest.js"));
const Login = React.lazy(() => import("./pages/Login.js"));
const Register = React.lazy(() => import("./pages/Register.js"));
const About = React.lazy(() => import("./pages/About.js"));

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
