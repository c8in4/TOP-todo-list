export default class ListOfProjects {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }

  updateProject(projectId, name) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === projectId,
    );
    this.projects[projectIndex].updateProject(name);
  }

  addTodo(projectId, todo) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === projectId,
    );
    this.projects[projectIndex].addTodo(todo);
  }

  updateTodo({ projectId, todoId }, { title, priority, dueDate, description }) {
    const projectIndex = this.projects.findIndex(
      (project) => project.id === projectId,
    );
    const todoIndex = this.projects[projectIndex].todoList.findIndex(
      (todo) => todo.id === todoId,
    );
    this.projects[projectIndex].todoList[todoIndex].updateTodo({
      title,
      priority,
      dueDate,
      description,
    });
  }

  removeItem({ projectId, todoId }) {
    if (projectId) {
      const projectIndex = this.projects.findIndex(
        (project) => project.id === projectId,
      );
      if (todoId) {
        this.projects[projectIndex].removeTodo(todoId);
      } else {
        this.projects.splice(projectIndex, 1);
      }
    }
  }
}
