export default class Project {
  constructor({ name }) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todoList = [];
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo);
  }

  removeTodo(todoIndex) {
    this.todoList.splice(todoIndex, 1);
  }
}
