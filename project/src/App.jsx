import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./apps/TodoApp.jsx";
import StopWatch from "./apps/StopWatch.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/todo">Todo</Link>
        <Link to="/stopwatch">StopWatch</Link>
      </nav>

      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
