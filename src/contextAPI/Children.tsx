import React, { useContext } from "react";
import { GrandData } from "./GrandParent";

const Children = () => {
  const { setLog, setRendering } = useContext(GrandData);
  return (
    <div>
      <button onClick={() => setLog((prev) => !prev)}>๋ก๊ทธ</button>
      <button onClick={() => setRendering((prev) => !prev)}>๋ ๋</button>
    </div>
  );
};

export default Children;
