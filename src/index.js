import './style.css'
import { Todo } from './classes/todoClass'
import { Project } from './classes/projectClass'

const listOfTodos = [new Todo('todo 1')] // array of todos
const listOfProjects = [] // array of projects

listOfProjects.push(new Project('My Todos'))
listOfProjects[0].todoList = listOfTodos


// I need "active Project" to add todo to certain project
function createTodo(description = '', dueDate, priority = 'normal') {
  const title = prompt("Todo title:")
  const todo = new Todo(title, description, dueDate, priority)
  listOfTodos.push(todo)
}

function createProject() {
  const name = prompt("Project name:")
  return new Project(name)
}

const createTodoButton = document.querySelector('#createTodo')
createTodoButton.addEventListener('click', () => {
  createTodo()
  render()
})

const createProjectButton = document.querySelector('#createProject')
createProjectButton.addEventListener('click', () => {
  listOfProjects.push(createProject())
  render()
})

function render() {
  renderSidebar()
  renderTodos()
}

function renderSidebar() {
  const unorderedListOfProjects = document.querySelector('#listOfProjects')
  unorderedListOfProjects.innerHTML = ''
  listOfProjects.forEach((project, index) => {
    const listItem = document.createElement('li')
    const itemButton = document.createElement('button')
    listItem.dataset.projectIndex = index

    itemButton.textContent = project.name
    listItem.appendChild(itemButton)
    unorderedListOfProjects.appendChild(listItem)
  })
}

function renderTodos(project = listOfProjects[0]) {
  // const mainElement = document.querySelector('main')

  const projectHeader = document.querySelector('#projectHeader')
  projectHeader.textContent = project.name

  const todoContainer = document.querySelector('#todoContainer')
  todoContainer.innerHTML = ''
  project.todoList.forEach((todo, index) => {
    todoContainer.appendChild(CreateTodoCard(todo, index))
  })
}

const CreateTodoCard = (todo, index) => {
  const todoCardDiv = document.createElement('div')
  todoCardDiv.classList.add('todoCard')
  todoCardDiv.dataset.todoIndex = index
  todoCardDiv.textContent = todo.title
  console.log(todo.title)
  return todoCardDiv
}

render()