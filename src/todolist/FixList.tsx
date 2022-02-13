import React, { useState } from "react";
interface ListSpreadProps {
  done: (fix: string) => void;
}
const FixList = ({ done }: ListSpreadProps) => {
  const [fix, setFix] = useState<string>("");
  const isDone = () => {
    done(fix);
    console.log(fix);
  };
  return (
    <div>
      <input
        type="text"
        value={fix}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFix(e.target.value)
        }
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            isDone();
          }
        }}
      />
      <button
        onClick={() => {
          isDone();
        }}
      >
        fix
      </button>
    </div>
  );
};

export default FixList;
