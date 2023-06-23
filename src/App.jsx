import React from "react";

import { store } from "./store";
import TodoList from "./todo/TodoList";
import AddTodo from "./todo/AddTodo";
import IF from "./IF";

export default function App() {
  console.log(store.todos);

  function todoRemoveHandler(evt) {
    console.log("App - todoRemoveHandler", evt);
  }

  function todoDoneChangeHandler(evt) {
    console.log("App - todoDoneChangeHandler", evt);
  }

  function addTodoHandler() {
    console.log("App - addTodohandler");
  }
  return (
    <>
      <h1>App</h1>
      <AddTodo onAddTodo={addTodoHandler} />

      <IF
        condition={store.activeTodos.length !== 0}
        THEN={
          <>
            <h2>Active todos</h2>
            <TodoList
              todos={store.activeTodos}
              onTodoRemove={todoRemoveHandler}
              onTodoDoneChange={todoDoneChangeHandler}
            />
          </>
        }
      />

      <IF
        condition={store.doneTodos.length !== 0}
        THEN={
          <>
            <h2>Done todos</h2>
            <TodoList
              todos={store.doneTodos}
              onTodoRemove={todoRemoveHandler}
              onTodoDoneChange={todoDoneChangeHandler}
            />
          </>
        }
      />

      <IF condition={store.todos.length === 0} THEN={<h2>No todos ...</h2>} />
    </>
  );
}
