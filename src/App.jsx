import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import Spinner from "./pages/Spinner.jsx";

const TaskList = React.lazy(() => import("./components/TaskList.jsx"));
const TaskDetail = React.lazy(() => import("./pages/TaskDetail.jsx"));
const HomePage = React.lazy(() => import("./pages/HomePage.jsx"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage.jsx"));
const ErrorTest = React.lazy(() => import("./pages/ErrorTest.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
