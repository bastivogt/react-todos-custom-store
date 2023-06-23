import React from "react";
import Todo from "./Todo";

export default function TodoList({
  title,
  todos,
  onTodoRemove,
  onTodoDoneChange,
}) {
  return (
    <>
      {title ? <h2>{title}</h2> : null}

      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              done={todo.done}
              onRemove={onTodoRemove}
              onDoneChange={onTodoDoneChange}
            />
          );
        })}
      </ul>
    </>
  );
}
