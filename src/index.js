import './style.css'
import { Todo } from './classes/todoClass'
import { Project } from './classes/projectClass'

const listOfProjects = [new Project('My Todos')]
let activeProject = 0

//////////////////////////
// this is only for testing
const listOfTodos = []
listOfTodos.push(new Todo('test todo 1'))
listOfTodos.push(new Todo('test todo 2'))
listOfProjects.push(new Project('test project 1'))
listOfProjects[0].todoList = listOfTodos
//////////////////////////

function createProject() {
  const name = prompt("Project name:")
  return new Project(name)
}

function createTodo(description = '', dueDate, priority = 'normal') {
  const title = prompt("Todo title:")
  const todo = new Todo(title, description, dueDate, priority)
  listOfProjects[activeProject].todoList.push(todo)
}

const createProjectButton = document.querySelector('#createProject')
createProjectButton.addEventListener('click', () => {
  listOfProjects.push(createProject())
  render()
})

const createTodoButton = document.querySelector('#createTodo')
createTodoButton.addEventListener('click', () => {
  createTodo()
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
    itemButton.textContent = project.name
    itemButton.addEventListener('click', () => {
      activeProject = index
      renderTodos()
    })
    
    listItem.appendChild(itemButton)
    unorderedListOfProjects.appendChild(listItem)
  })
}

function renderTodos(project = listOfProjects[activeProject]) {
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
  return todoCardDiv
}

render()
