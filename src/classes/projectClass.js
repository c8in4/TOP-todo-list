export class Project {
  constructor(name) {
    this.name = name
    this.todoList = [] // array of todos
  }
}

export function createProject() {
  const name = prompt("Project name:")
  return new Project(name)
}
