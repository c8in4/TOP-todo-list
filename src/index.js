import './style.css'
import { Todo } from './classes/todoClass'
import { Project } from './classes/projectClass'

const listOfTodos = [] // array of todos
const listOfProjects = [] // array of projects

function createTodo(title = '', description = '', dueDate, priority = 'normal', note = '', checklist = false) {
  const todo = new Todo(title, description, dueDate, priority, note, checklist)
  listOfTodos.push(todo)
}

function createProject(name) {
  const project = new Project(name)
  listOfProjects.push(project)
}

function render() {
  console.log('Projects:')
  console.log(listOfProjects)
  console.log('Todo list:')
  console.log(listOfTodos)
}

createProject('Rigging')
createProject('Disc Golf')

createTodo('test')
listOfProjects[1].todoList.push(listOfTodos[0])
render()
