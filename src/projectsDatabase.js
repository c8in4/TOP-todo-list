import Project from "./classes/project"
import Todo from "./classes/todo"

let listOfProjects = []

function addProjectToListOfProjects(newProject) {
  listOfProjects.push(newProject)
}

function removeProjectFromListOfProjects(projectIndex) {
  listOfProjects.splice(projectIndex, 1)
}

function addTodoToProject(projectIndex, todo) {
  listOfProjects[projectIndex].addTodo(todo)
}

function removeTodoFromProject(projectIndex, todoIndex) {
  listOfProjects[projectIndex].removeTodo(todoIndex)
}

export function createDefaultProject() {
  const defaultProject = new Project("Default Project")
  const exampleTodo = new Todo(
    "Example Todo",
    "This is just an example of a Todo with a description",
    "",
    "normal",
  )
  defaultProject.addTodo(exampleTodo)
  addProjectToListOfProjects(defaultProject)
}

export function getListOfProjects() {
  return listOfProjects
}

export function saveProjects() {
  const projectJson = JSON.stringify(listOfProjects)
  localStorage.setItem("projects", projectJson)
  console.log("Projects saved to local storage")
}

export function loadProjects() {
  const projects = localStorage.getItem("projects")
  const parsedProjects = JSON.parse(projects)
  if (projects) {
    listOfProjects = parsedProjects
    console.log("Loaded projects from local storage")
  } else {
    createDefaultProject()
    console.log(
      "No local projects found. Created default project with example todo",
    )
  }
}

////////////////////////////////////////////////////////////////
// testing
// console.group("testing of projects database")

// console.log(listOfProjects)

// createDefaultProject()
// console.log(listOfProjects)

// const newTodo = new Todo("test", "desc", "today", "none")
// addTodoToProject(0, newTodo)

// removeTodoFromProject(0, 0)
// removeProjectFromListOfProjects(0)
// // listOfProjects = []
// // console.log(getListOfProjects())

// // saveProjects()
// // loadProjects()

// console.log(listOfProjects)

// console.groupEnd()
