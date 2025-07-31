export default class Todo {
  constructor({
    title,
    priority,
    dueDate,
    description,
    checked,
    // checklist
  }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description || "no description";
    this.checked = checked || false;
    // this.checklist = checklist
  }

  updateTodo({
    title,
    priority,
    dueDate,
    description,
    // checklist
  }) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
  }

  changeCheckedState() {
    this.checked = !this.checked;
  }
}
