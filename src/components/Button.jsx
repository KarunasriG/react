import { useCount } from "../context/countContext.jsx";
import { Text } from "./Text.jsx";
export const Button = () => {
  const { setCount } = useCount();

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <Text />
    </>
  );
};
