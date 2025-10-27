import { useAuth } from "../context/authContext.jsx";
const Home = () => {
  const { loggedIn: isLoggedIn, setLoggedIn } = useAuth();
  const handleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <h1>Home Page</h1>

      {isLoggedIn ? (
        <p>Welcome back, user!</p>
      ) : (
        <input type="email" placeholder="enter email to login" />
      )}
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </>
  );
};

export default Home;
