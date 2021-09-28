import { makeAutoObservable, observable } from "mobx";

class Todo {
  todos = [{ id: 1, title: "smth", completed: false }];

  constructor() {
    makeAutoObservable(this, {}, { deep: true });
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  completeTodo(id) {
    this.todos[id - 1].completed = !this.todos[id - 1].completed;
    console.log(this.todos);
  }
  async fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (this.todos = [...this.todos, ...json]));
  }
}

export default new Todo();
