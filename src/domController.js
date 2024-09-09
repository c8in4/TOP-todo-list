import renderSidebar from "./renderSidebar"
import renderMain from "./renderMain"
import { createProjectDialog, createTodoDialog } from "./modalCreator"
import Project from "./classes/project"
import Todo from "./classes/todo"
import { getListOfProjects } from "./projectsDatabase"

export function render() {
  if (getListOfProjects()) {
    renderSidebar(activeProjectIndex)
    renderMain(getListOfProjects()[activeProjectIndex])
    setupEventListeners()
  }
}

export const dialog = document.querySelector("#dialog")

let activeProjectIndex = 0

const unorderedListOfProjects = document.querySelector("#listOfProjects")
unorderedListOfProjects.addEventListener("click", (e) => {
  const index = e.target.dataset.index
  activeProjectIndex = index
  console.info("index: " + index + " activeProjectIndex: " + activeProjectIndex)
  render()
})

function setupEventListeners() {
  const newProjectButton = document.querySelector("#createProject")
  newProjectButton.addEventListener("click", () => {
    projectEvent(saveNewProjectEvent)
  })

  const newTodoButton = document.querySelector("#createTodo")
  newTodoButton.addEventListener("click", () => {
    todoEvent(saveNewTodoEvent)
  })
}

function projectEvent(saveFunction) {
  console.info("new project button pressed")
  createProjectDialog("Create new Project")
  const saveFormButton = document.querySelector("#saveFormButton")
  saveFormButton.addEventListener("click", saveFunction)
  dialog.showModal()
  render()
}

function todoEvent(saveFunction) {
  console.info("new todo button pressed")
  createTodoDialog("Create new Todo") // TODO: change to use todo dialog
  const saveFormButton = document.querySelector("#saveFormButton")
  saveFormButton.addEventListener("click", saveFunction)
  dialog.showModal()
  render()
}

function saveNewProjectEvent() {
  console.info("save button in create project modal pressed")
}

function saveNewTodoEvent() {
  console.info("save button in create todo modal pressed")
}
