import { HighOrderedComponent } from "./hoc";

const Counter2 = ({ count, handleClick }) => {
  return (
    <div>
      Counter2 ::: <button onClick={handleClick}> {count} times clicked</button>
    </div>
  );
};

export default HighOrderedComponent(Counter2);
