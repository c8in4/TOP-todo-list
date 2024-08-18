import './style.css'
import { Todo } from './classes/todoClass'
import { Project } from './classes/projectClass'

const listOfTodos = [] // array of todos
const listOfProjects = [] // array of projects

function createTodo(description = '', dueDate, priority = 'normal') {
  const title = prompt("Todo title:")
  const todo = new Todo(title, description, dueDate, priority)
  listOfTodos.push(todo)
}

function createProject() {
  const name = prompt("Project name:")
  const project = new Project(name)
  listOfProjects.push(project)
}

function render() {
  console.log('Projects:')
  console.log(listOfProjects)
  console.log('Todo list:')
  console.log(listOfTodos)
}


createProject()
createProject()

createTodo()
listOfProjects[1].todoList.push(listOfTodos[0])
render()
