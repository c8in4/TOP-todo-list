export class Todo {
  constructor(
    title = '',
    note = '',
    dueDate,
    priority = 'normal',
    // description = '',
    // checklist = false
  ) {
    this.title = title
    this.note = note
    this.dueDate = dueDate
    this.priority = priority
    // this.description = description
    // this.checklist = checklist
  }
}
