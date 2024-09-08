import { format } from "date-fns"

export default class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    // note,
    // checklist
  ) {
    this.title = title
    this.description = description
    this.dueDate = dueDate || format(new Date(), "dd MMM yyyy")
    this.priority = priority
    // this.note = note
    // this.checklist = checklist
  }

  updateTodo(newTitle, newDescription, newDueDate, newPriority) {
    this.title = newTitle ? newTitle : this.title
    this.description = newDescription ? newDescription : this.description
    this.dueDate = newDueDate ? newDueDate : this.dueDate
    this.priority = newPriority ? newPriority : this.priority
  }
}

////////////////////////////////////////////////////////////////
// testing:

// console.group('testing of todo')
// // const firstTodo = new Todo('test title', 'this is a test description', format(new Date(), 'dd MMM yyyy'), 'normal')
// const firstTodo = new Todo("test title", "this is a test description", "", "normal")

// console.log(firstTodo)
// firstTodo.updateTodo("new", "new description", "", "")

// console.log(firstTodo)

// console.groupEnd()
