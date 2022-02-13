import React, { useReducer, useState } from "react";
interface Todo {
  id: number;
  note?: string;
}
interface State {
  newTodo: Todo[];
}
interface Action {
  type: string;
  payload: {
    id: number;
    note?: string;
  };
}
const OnReducer = () => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "ON_ADD":
        return {
          ...state,
          newTodo: [
            ...state.newTodo,
            { id: action.payload.id, note: action.payload.note },
          ],
        };
      case "ON_DELETE":
        return {
          ...state,
          newTodo: [
            ...state.newTodo.filter((el) => el.id !== action.payload.id),
          ],
        };
      default:
        return state;
    }
  };
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, { newTodo: [] });
  const onAdd = () => {
    dispatch({
      type: "ON_ADD",
      payload: {
        id: Date.now(),
        note: todo,
      },
    });
  };
  const onDelete = (id: number) => {
    dispatch({
      type: "ON_DELETE",
      payload: {
        id: id,
      },
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={onAdd}>add</button>
      {state.newTodo.map((t) => (
        <>
          <div key={t.id}>{t.note}</div>
          <button onClick={() => onDelete(t.id)}>X</button>
        </>
      ))}
    </div>
  );
};

export default OnReducer;
