export class Todo {
  constructor(
    title = '',
    description = '',
    dueDate,
    priority = 'normal',
    // note = '',
    // checklist = false
  ) {
    this.title = title // string
    this.description = description // string
    this.dueDate = dueDate // ??
    this.priority = priority // 'enum'?
    // this.note = note // string
    // this.checklist = checklist // boolean
  }
}

export function createTodo(description = '', dueDate, priority = 'normal') {
  const title = prompt("Todo title:")
  // const todo = 
  return title ? new Todo(title, description, dueDate, priority) : false
  // listOfProjects[activeProject].todoList.push(todo)
}
