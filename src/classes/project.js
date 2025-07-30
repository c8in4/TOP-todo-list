export default class Project {
  constructor({ name }) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todoList = [];
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo);
  }

  updateProject(name) {
    this.name = name ? name : this.name;
  }

  updateTodo(todoId, { title, priority, dueDate, description }) {
    const todoIndex = this.todoList.findIndex((todo) => todo.id === todoId);
    this.todoList[todoIndex].updateTodo({
      title,
      priority,
      dueDate,
      description,
    });
  }

  removeTodo(todoId) {
    const todoIndex = this.todoList.findIndex((todo) => todo.id === todoId);
    this.todoList.splice(todoIndex, 1);
  }
}
