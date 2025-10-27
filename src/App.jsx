import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Todo from "./pages/TodoApp.jsx";
import StopWatch from "./pages/StopWatch.jsx";
import Counter from "./pages/Counter.jsX";
import CounterRed from "./pages/CounterRed.jsx";
import ProductsFilter from "./pages/ProductsFilter.jsx";
import CounterUse from "./pages/CounterUse.jsx";
import Home from "./pages/Home.jsx";
import PrivateRoutes from "./privateRoutes/index.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ClassComponent from "./components/classComponent.jsx";
import HOCComponent from "./pages/HOCComponent.jsx";

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
        <NavLink style={activeClassStyle} to="/home">
          Home
        </NavLink>
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
        <NavLink style={activeClassStyle} to="/hoc">
          HOC
        </NavLink>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counterRed" element={<CounterRed />} />

        <Route path="/productsFilter" element={<ProductsFilter />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/hoc" element={<HOCComponent />} />

        <Route
          path="/counter-useContext"
          element={
            <PrivateRoutes>
              <CounterUse />
            </PrivateRoutes>
          }
        />
      </Routes>
      <>
        <ClassComponent />
      </>
    </BrowserRouter>
  );
}

export default App;
