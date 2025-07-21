import ListOfProjects from "./classes/listOfProjects"
import createDefaultProject from "./createDefaultProject"
import testProjectCreator from "./createTestProjects"

export let database = loadProjects()

export function saveProjects() {
  const projectJson = JSON.stringify(database)
  localStorage.setItem("projects", projectJson)
  console.info("Projects saved to local storage")
}

export function loadProjects() {
  const projects = localStorage.getItem("projects")
  const parsedProjects = JSON.parse(projects)
  if (projects) {
    console.info("Loaded projects from local storage")
    return parsedProjects
  } else {
    console.info("No local projects found. Created default project with example todo")
    const newDatabase = new ListOfProjects
    newDatabase.addProject(createDefaultProject())
    return newDatabase
  }
}
