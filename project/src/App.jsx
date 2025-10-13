import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Todo from "./apps/TodoApp.jsx";
import StopWatch from "./apps/StopWatch.jsx";
import Counter from "./apps/Counter.jsx";
import CounterRed from "./apps/CounterRed.jsx";
import ProductsFilter from "./apps/ProductsFilter.jsx";
import CounterUse from "./apps/CounterUse.jsx";

function App() {
  // using NavLink to apply active styles (navlink calls a function with isActive property)
  const activeClassStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "blue" : "black",
    };
  };
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <NavLink style={activeClassStyle} to="/todo">
          Todo
        </NavLink>
        <NavLink style={activeClassStyle} to="/stopwatch">
          StopWatch
        </NavLink>
        <NavLink style={activeClassStyle} to="/counter">
          Counter
        </NavLink>
        <NavLink style={activeClassStyle} to="/counterRed">
          CounterRed
        </NavLink>
        <NavLink style={activeClassStyle} to="/productsFilter">
          ProductsFilter
        </NavLink>
        <NavLink style={activeClassStyle} to="/counter-useContext">
          Counter UseContext
        </NavLink>
      </nav>

      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterRed" element={<CounterRed />} />
        <Route path="/productsFilter" element={<ProductsFilter />} />
        <Route path="/counter-useContext" element={<CounterUse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
