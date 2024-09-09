import createEditAndDeleteButtons from "./editAndDeleteButtonsCreator"

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

  const buttons = createEditAndDeleteButtons(
    () => {
      console.info("project edit button pressed")
    },
    () => {
      console.info("project delete button pressed")
    },
  )

  const createTodoButton = document.createElement("button")
  createTodoButton.id = "createTodo"
  createTodoButton.textContent = "Add Task"

  headerDiv.append(projectHeader, buttons)
  mainHeader.append(headerDiv, createTodoButton)
}

function renderTodoContainer(project) {
  project.todoList.forEach((todo, index) => {
    renderTodoCard(todo, index)
  })

  const todoExpanderFunction = (() => {
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

function renderTodoCard(todo, index) {
  const todoCardDiv = document.createElement("div")
  todoCardDiv.classList.add("todoCard")
  todoCardDiv.dataset.todoIndex = index // might not need this

  const todoCardHeaderDiv = document.createElement("div")
  todoCardHeaderDiv.classList.add("todoCardHeaderDiv")

  const title = document.createElement("h4")
  title.classList.add("todoCardHeader")
  title.textContent = todo.title

  const dueDate = document.createElement("p")
  dueDate.textContent = todo.dueDate

  const priority = document.createElement("p")
  priority.textContent = todo.priority

  const buttons = createEditAndDeleteButtons(
    () => {
      console.info("todo edit button pressed")
    },
    () => {
      console.info("todo delete button pressed")
    },
  )

  todoCardHeaderDiv.append(title, dueDate, priority, buttons)

  const description = document.createElement("p")
  description.classList.add("todoCardDescription", "hidden")
  description.textContent = todo.description

  todoCardDiv.append(todoCardHeaderDiv, description)

  todoContainer.appendChild(todoCardDiv)
}
