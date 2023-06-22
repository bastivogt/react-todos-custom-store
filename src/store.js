class Store {
  constructor() {
    this.__todos = [
      { id: 1, title: "React lernen", done: false },
      { id: 2, title: "Training", done: true },
      { id: 3, title: "Kacken", done: false },
    ];

    this.onUpdate = null;
  }

  __fireUpdate() {
    if (typeof this.onUpdate === "function") {
      this.onUpdate();
    }
  }

  get todos() {
    return this.__todos;
  }

  setTodos(value) {
    this.__todos = value;
    this.__fireUpdate();
  }

  get activeTodos() {
    return this.__todos.filter((item) => !item.done);
  }

  get doneTodos() {
    return this.__todos.filter((item) => item.done);
  }

  // getTodoByID
  getTodoByID(id) {
    const index = this.__todos.findIndex((item) => item.id === id);
    return this.__todos[index];
  }

  // addTodo
  addTodo(title) {
    let maxID = 1;
    this.__todos.map((item) => {
      if (maxID <= item.id) {
        maxID = item.id + 1;
      }
    });
    this.__todos.unshift({ id: maxID, title: title, done: false });
    this.__fireUpdate();
  }

  // removeTodo
  removeTodo(id) {
    const index = this.__todos.findIndex((item) => item.id === id);
    this.__todos.splice(index, 1);
    this.__fireUpdate();
  }

  // changeDone
  changeDone(id, done) {
    const index = this.__todos.findIndex((item) => item.id === id);
    this.__todos[index].done = done;
    this.__fireUpdate();
  }
}

const store = new Store();

export { store };
