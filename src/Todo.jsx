import React from "react";
import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>Fetch</button>
      {todo.todos.map((t) => (
        <div key={t.id}>
          <input
            type="checkbox"
            name="completed"
            id=""
            checked={t.completed}
            onChange={() => todo.completeTodo(t.id)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
