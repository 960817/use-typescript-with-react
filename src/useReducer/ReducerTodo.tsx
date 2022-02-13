import React, { useReducer, useState } from "react";
interface Todo {
  id: number;
  note?: string;
}
interface State {
  todos: Todo[];
}

interface Action {
  type: string;
  payload: {
    id: number;
    note?: string;
  };
}
const ReducerTodo = () => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "ON_ADD":
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: action.payload.id, note: action.payload.note },
          ],
        };
      case "ON_DELETE":
        return {
          ...state,
          todos: [...state.todos.filter((el) => el.id !== action.payload.id)],
        };
      default:
        return state;
    }
  };
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, { todos: [] });
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
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={onAdd}>add</button>
      {state.todos.map((v) => (
        <>
          <div key={v.id}>{v.note}</div>
          <button onClick={() => onDelete(v.id)}>X</button>
        </>
      ))}
    </div>
  );
};

export default ReducerTodo;
