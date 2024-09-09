export default class Todo {
  constructor(
    title,
    priority,
    dueDate,
    description,
    // note,
    // checklist
  ) {
    this.title = title
    this.priority = priority
    this.dueDate = dueDate
    this.description = description || "no description"
    // this.note = note
    // this.checklist = checklist
  }
}
