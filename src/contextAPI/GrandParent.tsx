import React, { createContext, useMemo, useState } from "react";
import Parent from "./Parent";

interface SetProp {
  setLog: React.Dispatch<React.SetStateAction<boolean>>;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}
export const GrandData = createContext<SetProp>({
  setLog: () => {},
  setRendering: () => {},
});

const GrandParent = () => {
  const [log, setLog] = useState(false);
  const [rendering, setRendering] = useState(false);
  const val = useMemo(() => ({ setLog, setRendering }), [setLog, setRendering]);

  return (
    <div>
      <GrandData.Provider value={val}>
        <Parent />
      </GrandData.Provider>
      <div>{log ? "로그인" : "로그아웃"}</div>
      <div>{rendering ? "렌더링" : "비렌더링"}</div>
    </div>
  );
};

export default GrandParent;
