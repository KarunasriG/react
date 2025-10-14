import { useCount } from "../context/countContext.jsx";

export const Text = () => {
  const { count } = useCount();
  return <>Count: {count}</>;
};
