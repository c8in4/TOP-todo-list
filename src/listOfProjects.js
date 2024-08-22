import { createProject } from './classes/projectClass';
import { createTodo } from './classes/todoClass';
import { Project } from './classes/projectClass';
import { render } from './render';
import { activeProject } from './render';

export const listOfProjects = [new Project('My Todos')];

const createProjectButton = document.querySelector('#createProject')
createProjectButton.addEventListener('click', () => {
  const newProject = createProject()
  if (newProject) listOfProjects.push(newProject)
  render()
});

const createTodoButton = document.querySelector('#createTodo')
createTodoButton.addEventListener('click', () => {
  const newTodo = createTodo()
  if (newTodo) listOfProjects[activeProject].todoList.push(newTodo)
  render()
})
