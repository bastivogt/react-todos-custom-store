import React from "react";

import { store } from "./store";
import TodoList from "./todo/TodoList";
import AddTodo from "./todo/AddTodo";

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
      {store.activeTodos.length !== 0 ? (
        <TodoList
          title="Active todos"
          todos={store.activeTodos}
          onTodoRemove={todoRemoveHandler}
          onTodoDoneChange={todoDoneChangeHandler}
        />
      ) : null}

      {store.doneTodos.length !== 0 ? (
        <TodoList
          title="Done todos"
          todos={store.doneTodos}
          onTodoRemove={todoRemoveHandler}
          onTodoDoneChange={todoDoneChangeHandler}
        />
      ) : null}
    </>
  );
}
