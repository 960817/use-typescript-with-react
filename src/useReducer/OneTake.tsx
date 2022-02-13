import React, { useReducer, useState } from "react";
interface Todo {
  id: number;
  note?: string;
}
interface State {
  Todos: Todo[];
}
interface Action {
  type: string;
  payload: {
    id: number;
    note?: string;
  };
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ON_ADD":
      return {
        ...state,
        Todos: [
          ...state.Todos,
          { id: action.payload.id, note: action.payload.note },
        ],
      };
    case "ON_DELETE":
      return {
        ...state,
        Todos: [...state.Todos.filter((el) => el.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

const OneTake = () => {
  const [state, dispatch] = useReducer(reducer, { Todos: [] });
  const [todo, setTodo] = useState("");
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
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
      {state.Todos.map((v) => {
        return (
          <>
            <span key={v.id}>{v.note}</span>
            <button onClick={() => onDelete(v.id)}>x</button>
          </>
        );
      })}
    </div>
  );
};

export default OneTake;
