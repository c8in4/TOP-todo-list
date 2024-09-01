import { Project } from "./classes/projectClass"
import { Todo } from "./classes/todoClass"

export let listOfProjects = [new Project("My Todos")]

export function saveProjects() {
  const projectJson = JSON.stringify(listOfProjects)
  localStorage.setItem("projects", projectJson)
}

export function loadProjects() {
  const projects = localStorage.getItem("projects")
  const parsedProjects = JSON.parse(projects)
  listOfProjects = parsedProjects ? parsedProjects : listOfProjects
}

let activeProjectIndex = 0

export function getActiveProject() {
  return activeProjectIndex
}

export function setActiveProject(newIndex) {
  activeProjectIndex = newIndex
}

export function createProject(name) {
  if (name) {
    const newProject = new Project(name)
    listOfProjects.push(newProject)
    setActiveProject(listOfProjects.length - 1)
  }
}

export function editProject(newName) {
  listOfProjects[activeProjectIndex].name = newName
    ? newName
    : listOfProjects[activeProjectIndex].name
}

export function deleteProject(index = activeProjectIndex) {
  listOfProjects.splice(index, 1)
  if (index <= activeProjectIndex) {
    activeProjectIndex = activeProjectIndex-- ? activeProjectIndex-- : 0
  }
}

export function createTodo(description = "", dueDate, priority = "normal") {
  const title = prompt("Todo title:")
  if (title && listOfProjects[activeProjectIndex]) {
    const newTodo = new Todo(title, description, dueDate, priority)
    listOfProjects[activeProjectIndex].todoList.push(newTodo)
  }
}

export function deleteTodo(projectIndex, todoIndex) {
  listOfProjects[projectIndex].todoList.splice(todoIndex, 1)
}
