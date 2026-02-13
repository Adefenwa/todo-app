import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/todos">Todos</Route>
        <Route path="/about">About</Route>
      </Routes>
    </>
  );
}

export default App;
