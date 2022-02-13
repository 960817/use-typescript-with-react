import React, { useContext, useState } from "react";
import { UserContext } from "../contextAPI/Store";
import AddBtn from "./AddBtn";
import ListSpread from "./ListSpread";

interface Todo {
  id: number;
  note: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAdd = (value: string) => {
    setTodos([...todos, { id: Date.now(), note: value }]);
  };
  const toDelete = (d: number) => {
    setTodos([...todos.filter((el) => el.id !== d)]);
  };
  const toFix = ({ note: text, id: taskId }: Todo) => {
    setTodos(
      todos.map((want) => {
        if (want.id === taskId) {
          return { ...want, note: text };
        } else {
          return want;
        }
      })
    );
  };
  const context = useContext(UserContext);
  return (
    <div>
      <h1>My to-do-list!</h1>
      <h2>{context.name}</h2>
      <h2>{context.job}</h2>
      <AddBtn onAdd={onAdd} />
      {todos.map((task) => (
        <ListSpread
          val={task.note}
          id={task.id}
          toDelete={() => toDelete(task.id)}
          toFix={(note, id) => toFix({ note, id })}
        />
      ))}
    </div>
  );
};

export default TodoList;
