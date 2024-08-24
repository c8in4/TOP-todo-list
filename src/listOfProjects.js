import { Project } from './classes/projectClass';
import { Todo } from "./classes/todoClass";

export const listOfProjects = [new Project('My Todos')];

let activeProjectIndex = 0

export function getActiveProject() {
  return activeProjectIndex
}

export function setActiveProject(newIndex) {
  activeProjectIndex = newIndex
}

export function createProject() {
  const name = prompt("Project name:")
  if (name) {
    const newProject = new Project(name)
    listOfProjects.push(newProject)
    setActiveProject(listOfProjects.length - 1)
  }
}

export function createTodo(description = '', dueDate, priority = 'normal') {
  const title = prompt("Todo title:")
  if (title && listOfProjects[activeProjectIndex]) {
    const newTodo = new Todo(title, description, dueDate, priority)
    listOfProjects[activeProjectIndex].todoList.push(newTodo)
  }
}

export function deleteProject(index) {
  listOfProjects.splice(index, 1)
  if (index <= activeProjectIndex) {
    activeProjectIndex = (activeProjectIndex--)
    ? activeProjectIndex--
    : 0
  }
}

export function deleteTodo(projectIndex, todoIndex) {
  listOfProjects[projectIndex].todoList.splice(todoIndex, 1)
}