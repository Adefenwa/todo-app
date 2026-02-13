import { Route, Routes } from "react-router-dom";
import { TaskList } from "./components/TaskList.jsx";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/">Home</Route>
        <Route path="/todos">Todos</Route>
        <Route path="/about">About</Route>
      </Routes> */}
      <TaskList />
    </>
  );
}

export default App;
