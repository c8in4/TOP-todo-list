export default class Todo {
  constructor({
    title,
    priority,
    dueDate,
    description,
    checked,
    // note,
    // checklist
  }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description || "no description";
    this.checked = checked || false;
    // this.note = note
    // this.checklist = checklist
  }

  changeCheckedState() {
    this.checked = !this.checked;
  }
}
