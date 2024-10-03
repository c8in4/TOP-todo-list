import { getListOfProjects } from "./projectsDatabase"
import renderSidebar from "./renderSidebar"
import renderMain from "./renderMain"
import Project from "./classes/project"
import Todo from "./classes/todo"
import { createProjectDialog, createTodoDialog } from "./modalCreator"

export function render() {
  renderSidebar(activeProjectIndex)
  renderMain(getListOfProjects()[activeProjectIndex])
  setupEventListeners()
}

const dialog = document.querySelector("#dialog")

let activeProjectIndex = 0

/* this next 2 elements don't get re-rendered, they only need the eventListener
setup once
*/
;(function setupNewProjectEventListener() {
  const newProjectButton = document.querySelector("#createProject")
  newProjectButton.addEventListener("click", () => {
    newProjectEvent()
  })
})()
//
;(function setupProjectListEventListener() {
  const unorderedListOfProjects = document.querySelector("#listOfProjects")
  unorderedListOfProjects.addEventListener("click", (e) => {
    const index = e.target.dataset.index
    if (index) activeProjectIndex = index
    render()
  })
})()

function setupEventListeners() {
  ;(function newTodo() {
    const newTodoButton = document.querySelector("#createTodo")
    if (newTodoButton) {
      newTodoButton.addEventListener("click", () => {
        newTodoEvent()
      })
    }
  })()
  //
  ;(function editProject() {
    const editProjectButton = document.querySelector(
      ".headerContainer .editButton",
    )
    if (editProjectButton) {
      editProjectButton.addEventListener("click", () => {
        editProjectEvent()
      })
    }
  })()
  //
  ;(function deleteProject() {
    const deleteProjectButton = document.querySelector(
      ".headerContainer .deleteButton",
    )
    if (deleteProjectButton) {
      deleteProjectButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this?")) {
          getListOfProjects().splice(activeProjectIndex, 1)
          activeProjectIndex--
          if (activeProjectIndex < 0) activeProjectIndex = 0
          render()
        }
      })
    }
  })()
  //
  ;(function editTodo() {
    const allEditTodoButtons = document.querySelectorAll(
      "#todoContainer .editButton",
    )
    allEditTodoButtons.forEach((editButton, index) => {
      editButton.addEventListener("click", () => {
        editTodoEvent(index)
      })
    })
  })()
  //
  ;(function deleteTodo() {
    const allDeleteTodoButtons = document.querySelectorAll(
      "#todoContainer .deleteButton",
    )
    allDeleteTodoButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this?")) {
          const activeProject = getListOfProjects()[activeProjectIndex]
          activeProject.todoList.splice(index, 1)
          render()
        }
      })
    })
  })()
}

function newProjectEvent() {
  console.info("new project button pressed")
  createProjectDialog("Create new Project")
  const projectName = document.querySelector("#projectName")
  projectName.focus()
  setupSaveButton(() => {
    const newProject = new Project(projectName.value)
    if (!newProject.name) return
    getListOfProjects().push(newProject)
    activeProjectIndex = getListOfProjects().length - 1
    render()
  })
  dialog.showModal()
}

function newTodoEvent() {
  console.info("new todo button pressed")
  createTodoDialog("Create new Todo")
  const todoTitle = document.querySelector("#todoTitle")
  const todoPriority = document.querySelector("#todoPriority")
  const todoDueDate = document.querySelector("#todoDueDate")
  const todoDescription = document.querySelector("#todoDescription")
  setupSaveButton(() => {
    const newTodo = new Todo(
      todoTitle.value,
      todoPriority.value,
      todoDueDate.value,
      todoDescription.value,
    )
    if (!newTodo.title) return
    const activeProject = getListOfProjects()[activeProjectIndex]
    activeProject.todoList.push(newTodo)
    render()
  })
  dialog.showModal()
}

function editProjectEvent() {
  console.info("edit project button pressed")
  createProjectDialog("Edit Project")
  const projectName = document.querySelector("#projectName")
  const activeProject = getListOfProjects()[activeProjectIndex]
  projectName.value = activeProject.name
  projectName.focus()
  setupSaveButton(() => {
    activeProject.name = projectName.value
    render()
  })
  dialog.showModal()
}

function editTodoEvent(todoIndex) {
  console.info("edit todo button pressed")
  createTodoDialog("Edit Todo")
  const todoTitle = document.querySelector("#todoTitle")
  const todoPriority = document.querySelector("#todoPriority")
  const todoDueDate = document.querySelector("#todoDueDate")
  const todoDescription = document.querySelector("#todoDescription")

  const activeProject = getListOfProjects()[activeProjectIndex]
  const activeTodo = activeProject.todoList[todoIndex]

  todoTitle.value = activeTodo.title
  todoPriority.value = activeTodo.priority
  todoDueDate.value = activeTodo.dueDate
  todoDescription.value = activeTodo.description

  setupSaveButton(() => {
    activeTodo.title = todoTitle.value
    activeTodo.priority = todoPriority.value
    activeTodo.dueDate = todoDueDate.value
    activeTodo.description = todoDescription.value
    render()
  })
  dialog.showModal()
}

function setupSaveButton(saveFunction) {
  const saveFormButton = document.querySelector("#saveFormButton")
  saveFormButton.addEventListener("click", (e) => {
    e.preventDefault()
    dialog.close()
    saveFunction()
  })
}
