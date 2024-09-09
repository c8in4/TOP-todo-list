let listOfProjects = []

export function addProjectToListOfProjects(newProject) {
  listOfProjects.push(newProject)
}

export function removeProjectFromListOfProjects(projectIndex) {
  listOfProjects.splice(projectIndex, 1)
}

export function addTodoToProject(projectIndex, todo) {
  listOfProjects[projectIndex].addTodo(todo)
}

export function removeTodoFromProject(projectIndex, todoIndex) {
  listOfProjects[projectIndex].removeTodo(todoIndex)
}

//////////////////////////////////
// only for testing:
// TODO: remove this!
import Project from "./classes/project"
import Todo from "./classes/todo"
/////////////////////////////////////////

export function createDefaultProject() {
  const defaultProject = new Project("Default Project")
  const exampleTodo = new Todo(
    "Example Todo",
    "normal",
    "This is just an example of a Todo with a description",
    "",
  )
  defaultProject.addTodo(exampleTodo)
  addProjectToListOfProjects(defaultProject)

  //////////////////////////////////////////////////////////////
  // only for testing
  // TODO: remove this!
  const testProject = new Project("Test Project")
  const testTodo = new Todo("test todo", "normal")
  testProject.addTodo(testTodo)
  addProjectToListOfProjects(testProject)

  const testProject2 = new Project("Test Project 2")
  const testTodo2 = new Todo("test todo 2", "normal", "this is just some thing")
  testProject2.addTodo(testTodo2)
  addProjectToListOfProjects(testProject2)
  //////////////////////////////////////////////////////////////
}

export function getListOfProjects() {
  return listOfProjects
}

export function saveProjects() {
  const projectJson = JSON.stringify(getListOfProjects())
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
