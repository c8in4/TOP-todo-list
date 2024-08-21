import { listOfProjects } from './listOfProjects';

export let activeProject = 0;
export function render() {
  renderSidebar();
  renderTodos();
}

function renderSidebar() {
  const unorderedListOfProjects = document.querySelector('#listOfProjects');
  unorderedListOfProjects.innerHTML = '';
  listOfProjects.forEach((project, index) => {
    const listItem = document.createElement('li');

    const itemButton = document.createElement('button');
    itemButton.textContent = project.name;
    itemButton.addEventListener('click', () => {
      activeProject = index;
      renderTodos();
    });

    listItem.appendChild(itemButton);
    unorderedListOfProjects.appendChild(listItem);
  });
}

function renderTodos(project = listOfProjects[activeProject]) {
  const projectHeader = document.querySelector('#projectHeader');
  projectHeader.textContent = project.name;

  const todoContainer = document.querySelector('#todoContainer');
  todoContainer.innerHTML = '';
  project.todoList.forEach((todo, index) => {
    todoContainer.appendChild(CreateTodoCard(todo, index));
  });
}

const CreateTodoCard = (todo, index) => {
  const todoCardDiv = document.createElement('div');
  todoCardDiv.classList.add('todoCard');
  todoCardDiv.dataset.todoIndex = index;
  todoCardDiv.textContent = todo.title;
  return todoCardDiv;
};
