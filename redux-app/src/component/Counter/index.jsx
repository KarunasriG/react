import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../../slice/countSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleIncrement = () => {
    console.log("clicked");
    dispatch(increment());
    console.log(count);
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
