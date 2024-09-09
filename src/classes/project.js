export default class Project {
  constructor(name) {
    this.name = name
    this.todoList = []
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo)
  }

  removeTodo(todoIndex) {
    if (todoIndex < this.todoList.length) {
      this.todoList.splice(todoIndex, 1)
    } else {
      console.log("invalid index")
    }
  }
}
