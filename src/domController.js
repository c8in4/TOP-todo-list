import { RenderTodoCard } from "./RenderTodoCard"
import {
  listOfProjects,
  saveProjects,
  getActiveProject,
  setActiveProject,
  createProject,
  editProject,
  deleteProject,
  createTodo,
  editTodo,
  // deleteTodo,
} from "./listOfProjects"
import { CreateProjectDialog, CreateTodoDialog } from "./modalCreator"

export const Render = () => {
  renderSidebar()
  renderMain()
  saveProjects()
  TodoCardExpander()
}

const TodoCardExpander = () => {
  for (const todo of todoContainer.children) {
    todo.addEventListener("click", () => {
      const todoNote = todo.lastChild
      const className = "hidden"
  
      // if (todoNote.classList.contains(className)) {
      //   alert("yes")
      //   todoNote.classList.remove(className)
      // } else {
      //   alert('no')
      // }
      todoNote.classList.toggle(className)
      // Render()
      // renderTodos()
    })
  }
}

const unorderedListOfProjects = document.querySelector("#listOfProjects")
const todoContainer = document.querySelector("#todoContainer")
const mainTopDiv = document.querySelector("#mainTop")
const dialog = document.querySelector("#dialog")
const createProjectButton = document.querySelector("#createProject")

const saveFormButton = document.querySelector("#saveFormButton")

createProjectButton.addEventListener("click", () => {
  CreateProjectDialog("Create new Project")
  saveFormButton.addEventListener("click", saveNewProjectEvent)
  dialog.showModal()
})

function saveNewProjectEvent() {
  const projectName = document.querySelector("#projectName")
  createProject(projectName.value)
  saveFormButton.removeEventListener("click", saveNewProjectEvent)
  Render()
}

function editProjectEvent() {
  const projectName = document.querySelector("#projectName")
  editProject(projectName.value)
  saveFormButton.removeEventListener("click", editProjectEvent)
  Render()
}

function renderSidebar() {
  unorderedListOfProjects.innerHTML = ""

  listOfProjects.forEach((project, index) => {
    const listItem = document.createElement("li")

    const itemButton = document.createElement("button")
    itemButton.classList.add("itemButton")
    itemButton.textContent = project.name
    itemButton.addEventListener("click", () => {
      setActiveProject(index)
      Render()
    })

    if (index == getActiveProject()) {
      listItem.classList.add("activeProject")
    } else {
      listItem.classList.remove("activeProject")
    }

    listItem.appendChild(itemButton)
    unorderedListOfProjects.appendChild(listItem)
  })
}

function renderMain() {
  const project = listOfProjects[getActiveProject()]
  mainTopDiv.innerHTML = ""
  todoContainer.innerHTML = ""

  if (project) {
    renderProjectHeader(project)
    renderTodos(project)
  }

  if (mainTopDiv.innerHTML == "") {
    mainTopDiv.textContent = "You have no projects"
  }
}

function renderProjectHeader(project) {
  const headerDiv = document.createElement("div")
  headerDiv.classList.add("headerContainer")

  const projectHeader = document.createElement("h2")
  projectHeader.id = "projectHeader"
  projectHeader.textContent = project.name

  const editButton = document.createElement("button")
  editButton.classList.add("editButton")

  editButton.addEventListener("click", () => {
    CreateProjectDialog("Edit Project")
    const projectName = document.querySelector("#projectName")
    projectName.value = listOfProjects[getActiveProject()].name
    saveFormButton.addEventListener("click", editProjectEvent)
    dialog.showModal()
  })

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")

  deleteButton.addEventListener("click", () => {
    deleteProject()
    Render()
  })

  const createTodoButton = document.createElement("button")
  createTodoButton.id = "createTodo"
  createTodoButton.textContent = "Add Task"

  createTodoButton.addEventListener("click", () => {
    CreateTodoDialog("Create new Task")
    saveFormButton.addEventListener("click", saveNewTodoEvent)
    dialog.showModal()
  })

  function saveNewTodoEvent() {
    const todoTitle = document.querySelector("#todoTitle")
    const todoNote = document.querySelector("#todoNote")
    createTodo(todoTitle.value, todoNote.value)
    saveFormButton.removeEventListener("click", saveNewTodoEvent)
    Render()
  }

  headerDiv.append(projectHeader, editButton, deleteButton)

  mainTopDiv.append(headerDiv, createTodoButton)
}

function renderTodos(project) {
  if (project.todoList) {
    project.todoList.forEach((todo, index) => {
      todoContainer.appendChild(RenderTodoCard(todo, index))
    })
  }
}

////////////////////////////////
// trying to get the "expand"-functionality to work

// todoContainer.addEventListener("click", (e) => {
//   const target = e.target
//   if (target && target.classList != 'editButton' && target.classList != 'deleteButton') {
//     // const todoNote = document.querySelector('')
//     // target.dataset.todoIndex

//     console.log(target.dataset.todoIndex)

//   }
// })
