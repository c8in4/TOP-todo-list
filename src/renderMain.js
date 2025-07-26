import EditIcon from './icons/edit-icon.png'
import DeleteIcon from './icons/delete-icon.png'

export function renderProjects(projects) {
  const mainContainer = document.querySelector('main')
  mainContainer.innerText = ''
  projects.forEach(project => {
    mainContainer.appendChild(createProjectContainer(project))
  });
}

function createProjectContainer(project) {
  const container = document.createElement('div')
  container.classList.add('projectCard')
  container.dataset.id = project.id

  const headerAndButtons = document.createElement('div')
  headerAndButtons.classList.add('projectHeader')
  const header = document.createElement('h2')
  header.innerText = project.name

  headerAndButtons.append(header, createEditAndDeleteButtons())

  const todos = createTodoContainer(project.todoList)
  container.append(headerAndButtons, todos)
  return container
}

function createTodoContainer(todoList) {
  const todosContainer = document.createElement('div')
  todosContainer.classList.add('todoList')
  todoList.forEach(todo => {
    todosContainer.appendChild(createTodo(todo))
  });
  return todosContainer
}

function createTodo(todo) {
  const todoContainer = document.createElement('div')
  todoContainer.classList.add('todoItem')
  todoContainer.dataset.id = todo.id
  const title = document.createElement('h3')
  if (todo.checked) {
    title.classList.add('lineThrough')
  }
  title.innerText = todo.title
  const description = document.createElement('p')
  description.innerText = todo.description
  const dueDate = document.createElement('p')
  dueDate.innerText = 'due: ' + todo.dueDate
  const priority = document.createElement('p')
  priority.innerText = 'priority: ' + todo.priority

  todoContainer.append(title, dueDate, priority, description)
  return todoContainer
}

function createEditAndDeleteButtons() {
  const container = document.createElement("div")
  container.classList.add("editAndDeleteButtons")

  const editButton = document.createElement("button")
  const editImg = document.createElement('img')
  editImg.classList.add("editImg")
  editImg.src = EditIcon
  editButton.appendChild(editImg)

  const deleteButton = document.createElement("button")
  const deleteImg = document.createElement('img')
  deleteImg.classList.add("deleteImg")
  deleteImg.src = DeleteIcon
  deleteButton.appendChild(deleteImg)

  container.append(editButton, deleteButton)
  return container
}