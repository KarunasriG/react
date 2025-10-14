import { useContext, createContext, useState } from "react";

// create
const AuthContext = createContext();

// provider
const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// consumer
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
