import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CountProvider } from "./context/countContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </CountProvider>
  </StrictMode>
);
