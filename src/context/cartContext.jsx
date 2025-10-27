import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer.jsx";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
