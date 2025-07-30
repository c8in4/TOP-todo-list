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
    this.title = title ? title : this.title;
    this.priority = priority ? title : this.priority;
    this.dueDate = dueDate ? title : this.dueDate;
    this.description = description
      ? title
      : this.description || "no description";
  }

  changeCheckedState() {
    this.checked = !this.checked;
  }
}
