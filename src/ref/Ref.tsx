import React, { useRef, useState } from "react";

const Ref = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const focus = () => {
    if (inputRef.current) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
      console.log(inputRef.current.value);
    }
  };
  const reset = () => {
    if (inputRef.current) {
      inputRef.current.disabled = true;
      console.log(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>hello! my name is {name}</h1>
      <button onClick={focus}>Focus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Ref;
