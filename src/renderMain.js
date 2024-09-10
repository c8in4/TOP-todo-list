import createEditAndDeleteButtons from "./editAndDeleteButtonsCreator"
import { format } from "date-fns"

const todoContainer = document.querySelector("#todoContainer")
const mainHeader = document.querySelector("#mainTop")

export default function renderMain(project) {
  mainHeader.innerHTML = ""
  todoContainer.innerHTML = ""
  if (!project) {
    mainHeader.textContent = "You have no projects"
    return
  }
  renderMainHeader(project)
  renderTodoContainer(project)
}

function renderMainHeader(project) {
  const headerDiv = document.createElement("div")
  headerDiv.classList.add("headerContainer")

  const projectHeader = document.createElement("h2")
  projectHeader.id = "projectHeader"
  projectHeader.textContent = project.name

  const buttons = createEditAndDeleteButtons()

  const createTodoButton = document.createElement("button")
  createTodoButton.id = "createTodo"
  createTodoButton.textContent = "Add Task"

  headerDiv.append(projectHeader, buttons)
  mainHeader.append(headerDiv, createTodoButton)
}

function renderTodoContainer(project) {
  project.todoList.forEach((todo) => {
    renderTodoCard(todo)
  })
  ;(function todoExpander() {
    const allTodoCards = todoContainer.children

    for (const todoCard of allTodoCards) {
      todoCard.addEventListener("click", (e) => {
        const targetType = e.target.type
        if (targetType === "submit") return
        const description = todoCard.lastChild
        description.classList.toggle("hidden")
      })
    }
  })()
}

function renderTodoCard(todo) {
  const todoCardDiv = document.createElement("div")
  todoCardDiv.classList.add("todoCard")

  const todoCardHeaderDiv = document.createElement("div")
  todoCardHeaderDiv.classList.add("todoCardHeaderDiv")

  const title = document.createElement("h4")
  title.classList.add("todoCardHeader")
  title.textContent = todo.title

  const dueDate = document.createElement("p")
  dueDate.textContent = format(todo.dueDate, "dd MMM yyyy")

  const priority = document.createElement("p")
  priority.textContent = todo.priority
  switch (todo.priority) {
    case "high":
      todoCardDiv.classList.add("high-priority")
      break
    case "normal":
      todoCardDiv.classList.add("normal-priority")
      break
    case "low":
      todoCardDiv.classList.add("low-priority")
      break
    default:
      break
  }

  const buttons = createEditAndDeleteButtons()

  todoCardHeaderDiv.append(title, dueDate, priority, buttons)

  const description = document.createElement("p")
  description.classList.add("todoCardDescription", "hidden")
  description.textContent = todo.description

  todoCardDiv.append(todoCardHeaderDiv, description)

  todoContainer.appendChild(todoCardDiv)
}
