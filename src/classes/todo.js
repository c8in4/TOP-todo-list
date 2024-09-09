import { format } from "date-fns"

export default class Todo {
  constructor(
    title,
    priority,
    description,
    dueDate,
    // note,
    // checklist
  ) {
    this.title = title
    this.priority = priority
    this.description = description || "no description"
    this.dueDate = dueDate || format(new Date(), "dd MMM yyyy")
    // this.note = note
    // this.checklist = checklist
  }

  updateTodo(newTitle, newPriority, newDueDate, newDescription) {
    this.title = newTitle ? newTitle : this.title
    this.priority = newPriority ? newPriority : this.priority
    this.dueDate = newDueDate ? newDueDate : this.dueDate
    this.description = newDescription ? newDescription : this.description
  }
}
