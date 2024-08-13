class Todo {
  constructor(title = '', description = '', dueDate, priority = 'normal', note = '', checklist = false) {
    this.title = title // string
    this.description = description // string
    this.dueDate = dueDate // ??
    this.priority = priority // 'enum'?
    this.note = note // string
    this.checklist = checklist // boolean
  }
}