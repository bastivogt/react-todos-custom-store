import { store } from "../store";

export default function Todo({ id, title, done, onRemove, onDoneChange }) {
  function doneChangeHandler(evt) {
    store.changeDone(id, evt.target.checked);
    if (typeof onDoneChange === "function") onDoneChange({ id });
  }

  function removeHandler() {
    if (confirm("Do you really want to remove this todo?")) {
      store.removeTodo(id);
      if (typeof onRemove === "function") onRemove({ id });
    }
  }

  function getTextStyle() {
    if (store.getTodoByID(id).done) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={store.getTodoByID(id).done}
        onChange={doneChangeHandler}
      />
      #{id} <span style={getTextStyle()}>{title}</span>
      <button onClick={removeHandler}>x</button>
    </li>
  );
}
