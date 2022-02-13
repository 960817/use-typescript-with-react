import React, { useReducer, useState } from "react";

interface Action {
  type: "increment" | "decrement";
}
const onReducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const Compare = () => {
  const [num, setNum] = useState(0);
  const [number, dispatch] = useReducer(onReducer, 0); //reducer
  const onIncrease = () => {
    dispatch({ type: "increment" });
  };
  const onDecrease = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>useState 썼을때</h1>
      {num}
      <button onClick={() => setNum((prev) => prev + 1)}>+</button>
      <button onClick={() => setNum((prev) => prev - 1)}>-</button>
      <h1>useReducer 썼을때</h1>
      {number}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Compare;
