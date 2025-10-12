import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Todo from "./apps/TodoApp.jsx";
import StopWatch from "./apps/StopWatch.jsx";
import Counter from "./apps/Counter.jsx";
import CounterRed from "./apps/CounterRed.jsx";
import ProductsFilter from "./apps/ProductsFilter.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/todo">Todo</Link>
        <Link to="/stopwatch">StopWatch</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/counterRed">CounterRed</Link>
        <Link to="/productsFilter">ProductsFilter</Link>
      </nav>

      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterRed" element={<CounterRed />} />
        <Route path="/productsFilter" element={<ProductsFilter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
