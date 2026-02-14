import { Route, Routes } from "react-router-dom";
import { TaskList } from "./components/TaskList.jsx";
import { TaskDetail } from "./pages/TaskDetail.jsx";
import { HomePage } from "./pages/HomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
