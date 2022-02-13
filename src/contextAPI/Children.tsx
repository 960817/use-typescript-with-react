import React, { useContext } from "react";
import { GrandData } from "./GrandParent";

const Children = () => {
  const { setLog, setRendering } = useContext(GrandData);
  return (
    <div>
      <button onClick={() => setLog((prev) => !prev)}>로그</button>
      <button onClick={() => setRendering((prev) => !prev)}>렌더</button>
    </div>
  );
};

export default Children;
