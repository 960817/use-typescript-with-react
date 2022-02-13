import React, { useState } from "react";
interface MainProps {
  toAdd: (title: string) => void;
}
const Search = ({ toAdd }: MainProps) => {
  const [title, setTitle] = useState<string>("");
  const add = () => {
    toAdd(title);
    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") add();
        }}
      />
      <button onClick={add}>ADD</button>
    </div>
  );
};

export default Search;
