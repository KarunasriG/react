import { useState } from "react";
import { useRef } from "react";

//  useRef -> is a hook, it basically used yp intialixe value which will not change on re-render
//  it is like a box which can hold a value across the render cycle of the component
//  it doesn't re-render the component, it hold the value even after the component life cycle is over
const StopWatch = () => {
  const [count, setCount] = useState(0);
  const timerIdRef = useRef(null);

  const OnClickStart = () => {
    timerIdRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
  };

  const OnClickStop = () => {
    clearInterval(timerIdRef.current);
    console.log("timer stopped");
  };
  return (
    <div>
      Stop watch
      <h2>Stop Watch Application</h2>
      <p>Count : {count} </p>
      <button onClick={OnClickStart}>Start</button>
      <button onClick={OnClickStop}>Stop</button>
    </div>
  );
};

export default StopWatch;
