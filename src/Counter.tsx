import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState<number>(0);
  const numIncre = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={numIncre}>increase</button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        decrease
      </button>
      <button onClick={() => setNum(0)}>reset</button>
    </div>
  );
};

export default Counter;
