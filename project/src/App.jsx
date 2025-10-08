import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./apps/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/todo">Todo</Link>
      </nav>

      <Routes>
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
