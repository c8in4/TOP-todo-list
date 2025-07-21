import { format } from "date-fns"
import Project from "./classes/project"
import Todo from "./classes/todo"
import testProjectCreator from "./testProjectCreator"

class ListOfProjects {
  constructor() {
    this.projects = []
  }

  addProject(project) {
    this.projects.push(project)
  }

  removeProject(projectId) {
    const indexOfProjectToDelete = this.projects.findIndex(project => {
      return project.id == projectId
    })
    this.projects.splice(indexOfProjectToDelete, 1)
  }
}

export let database = new ListOfProjects

export function saveProjects() {
  const projectJson = JSON.stringify(database)
  localStorage.setItem("projects", projectJson)
  console.info("Projects saved to local storage")
}

export function loadProjects() {
  const projects = localStorage.getItem("projects")
  const parsedProjects = JSON.parse(projects)
  if (projects) {
    database = parsedProjects
    console.info("Loaded projects from local storage")
  } else {
    database.addProject(createDefaultProject())
    // database.addProject(testProjectCreator('Project 1'))
    // database.addProject(testProjectCreator('Project 2'))
    console.info(

      "No local projects found. Created default project with example todo",
    )
  }
}

export function createDefaultProject() {
  const defaultProject = new Project("Default Project")
  const exampleTodo = new Todo(
    "Example Todo",
    "normal",
    format(new Date(), "yyyy-MM-dd"),
    "This is just an example of a Todo with a description",
  )
  defaultProject.addTodo(exampleTodo)
  return defaultProject
}
