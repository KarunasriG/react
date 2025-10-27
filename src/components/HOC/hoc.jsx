import { useState } from "react";

// this is a higher order component
// where we pass the component as a parameter
// and return a new component
// count,handleClick are props passed to the component
export const HighOrderedComponent = (Component) => {
  return function UpdatedComponent() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count + 10);
    };

    return <Component count={count} handleClick={handleClick} />;
  };
};
