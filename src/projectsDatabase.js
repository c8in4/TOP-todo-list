import { format } from "date-fns"
import Project from "./classes/project"
import Todo from "./classes/todo"

let listOfProjects = []

export function getListOfProjects() {
  return listOfProjects
}

export function saveProjects() {
  const projectJson = JSON.stringify(listOfProjects)
  localStorage.setItem("projects", projectJson)
  console.info("Projects saved to local storage")
}

export function loadProjects() {
  const projects = localStorage.getItem("projects")
  const parsedProjects = JSON.parse(projects)
  if (projects) {
    listOfProjects = parsedProjects
    console.info("Loaded projects from local storage")
  } else {
    createDefaultProject()
    console.info(
      "No local projects found. Created default project with example todo",
    )
  }
}

function createDefaultProject() {
  const defaultProject = new Project("Default Project")
  const exampleTodo = new Todo(
    "Example Todo",
    "normal",
    format(new Date(), "yyyy-MM-dd"),
    "This is just an example of a Todo with a description",
  )
  defaultProject.addTodo(exampleTodo)
  listOfProjects.push(defaultProject)
}
