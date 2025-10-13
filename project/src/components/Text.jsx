import { useCount } from "../context/count-context.jsx";

export const Text = () => {
  const { count } = useCount();
  return <>Count: {count}</>;
};
