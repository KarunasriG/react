import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoutes = ({ children }) => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();
  return !loggedIn ? (
    <>
      <h1>
        Please log in to access this page.
        <button onClick={() => navigate("/home")}>Click here to Login</button>
      </h1>
    </>
  ) : (
    children
  );
};

export default PrivateRoutes;
