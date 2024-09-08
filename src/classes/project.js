export default class Project {
  constructor(name) {
    this.name = name
    this.todoList = []
  }

  updateProjectName(newName) {
    this.name = newName ? newName : this.name
  }

  addTodo(newTodo) {
    this.todoList.push(newTodo)
  }

  removeTodo(todoIndex) {
    if (todoIndex < this.todoList.length) {
      this.todoList.splice(todoIndex, 1)
    } else {
      console.log('invalid index')
    }
  }
}

////////////////////////////////////////////////////////////////
// testing
// import Todo from "./todo"

// console.group("testing of project")
// const testProject = new Project("New Project")
// console.log(testProject)

// testProject.updateProjectName("New Project Name")
// const testTodo = new Todo("todo")

// testProject.addTodo(testTodo)
// testProject.addTodo(testTodo)
// testProject.addTodo(testTodo)

// console.log(testProject)

// testProject.removeTodo(0)
// testProject.removeTodo(2)

// console.log(testProject)

// console.groupEnd()
