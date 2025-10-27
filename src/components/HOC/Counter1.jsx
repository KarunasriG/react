import { HighOrderedComponent } from "./hoc";

const Counter1 = ({ count, handleClick }) => {
  return (
    <div>
      Counter1 ::: <button onClick={handleClick}> {count} times clicked</button>
    </div>
  );
};

export default HighOrderedComponent(Counter1);

// here counter1, counter2 has same functionality
// so we can use HOC to reduce redundancy/repeated code
// w wrap this component in HOC then passing the component as a parameter with arguments as similar functionalities

/** 
  const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 10);
  };
  return (
    <div>
      Counter1 ::: <button onClick={handleClick}> {count} times clicked</button>
    </div>
  );
};

export default Counter1;
*/
