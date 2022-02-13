import React, { useState } from "react";

interface MyListProps {
  onAdd: (note: string) => void;
}

const AddBtn = ({ onAdd }: MyListProps) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const toAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const clickEvent = () => {
    onAdd(newTodo);
    setNewTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={toAdd}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            clickEvent();
          }
        }}
      />
      <button onClick={clickEvent}>Add</button>
    </div>
  );
};

export default AddBtn;
