import React, { useState } from "react";
import { store } from "../store";

export default function AddTodo({
  title = "Add todo",
  placeholder = "Title",
  onAddTodo,
}) {
  const [inputText, setInputText] = useState("");

  function addTodoHandler() {
    if (inputText !== "") {
      store.addTodo(inputText);
      setInputText("");
      if (typeof onAddTodo === "function") onAddTodo();
    }
  }

  function inputChangeHandler(evt) {
    setInputText(evt.target.value);
  }

  function inputKeyUpHandler(evt) {
    if (evt.key === "Enter") {
      addTodoHandler();
    }
  }
  return (
    <>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        value={inputText}
        onChange={inputChangeHandler}
        onKeyUp={inputKeyUpHandler}
      />
      <button onClick={addTodoHandler}>Add todo</button>
    </>
  );
}
