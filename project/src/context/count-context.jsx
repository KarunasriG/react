import { useContext, createContext, useState } from "react";

// creating the context
const CountContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components

// creating the provider
const CountProvider = ({ children }) => {
  // global varaibles we want to use all over the app
  const [count, setCount] = useState(10);

  return (
    // wrapping the children with the provider
    // children represent all the components that will be use by this provider
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// custom hook to use the context (consumer)
const useCount = () => useContext(CountContext);

export { useCount, CountProvider };
