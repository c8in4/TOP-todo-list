export class Todo {
  constructor(
    title = '',
    description = '',
    dueDate,
    priority = 'normal',
    // note = '',
    // checklist = false
  ) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    // this.note = note
    // this.checklist = checklist
  }
}
