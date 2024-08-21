import { createProject } from './classes/projectClass';
import { createTodo } from './classes/todoClass';
import { Project } from './classes/projectClass';
import { render } from './render';
import { activeProject } from './render';

export const listOfProjects = [new Project('My Todos')];

const createProjectButton = document.querySelector('#createProject')
createProjectButton.addEventListener('click', () => {
  listOfProjects.push(createProject())
  render()
});

const createTodoButton = document.querySelector('#createTodo')
createTodoButton.addEventListener('click', () => {
  listOfProjects[activeProject].todoList.push(createTodo())
  render()
})
