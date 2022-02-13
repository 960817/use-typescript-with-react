import React, { useState } from "react";
import FixList from "./FixList";

interface TodoProps {
  toDelete: () => void;
  toFix: (note: string, id: number) => void;
  id: number;
  val: string;
  key?: any;
}
const ListSpread = ({ val, toDelete, toFix, id }: TodoProps) => {
  const [render, setRender] = useState<boolean>(false);
  const done = (note: string) => {
    setRender(false);
    toFix(note, id);
    console.log("done");
  };

  return render ? (
    <FixList done={(note) => done(note)} />
  ) : (
    <div>
      <span>{val}</span>
      <button onClick={() => toDelete()}>delete</button>
      <button onClick={() => setRender(true)}>수정</button>
    </div>
  );
};

export default ListSpread;
