export default class Project {
  constructor(name) {
    this.id = crypto.randomUUID()
    this.name = name
    this.todoList = []
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo)
  }

  // removeTodo(todoIndex) {
  //   if (todoIndex < this.todoList.length) {
  //     this.todoList.splice(todoIndex, 1)
  //   } else {
  //     console.log("invalid index")
  //   }
  // }

  removeTodo(todoId) {
    const indexOfTodoToDelete = this.todoList.findIndex(todo => {
      return todo.id == todoId
    })
    this.todoList.splice(indexOfTodoToDelete, 1)
  }
}
