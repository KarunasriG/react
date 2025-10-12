import React, { useReducer } from "react";
import { countReducer } from "../reducers/countReducer.jsx";

const CounterRed = () => {
  const initialState = { count: 0 };
  // defining the reducer function inside the component (not recommended)
  //   const countReducer = (state, action) => {
  //   switch (action.type) {
  //     case "INC":
  //       return { count: state.count + 1 };
  //     case "DEC":
  //       return { count: state.count - 1 };
  //     case "RESET":
  //       return { count: 0 };
  //     default:
  //       return state;
  //   }
  // };

  // same like useState : state and dispacth for setter function
  // countReducer is the function which will modify the state based on action
  const [state, counterDispatch] = useReducer(countReducer, initialState);

  const onReset = () => {
    counterDispatch({ type: "RESET" });
  };
  return (
    <div>
      Counter Using Reducer
      <h1>Count : {state.count}</h1>
      <button
        onClick={() => {
          counterDispatch({ type: "INC" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counterDispatch({ type: "DEC" });
        }}
      >
        -
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export default CounterRed;
