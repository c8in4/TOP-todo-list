import { listOfProjects, getActiveProject, setActiveProject, createProject, createTodo, deleteProject, deleteTodo } from './listOfProjects';

export const Render = () => {
  renderSidebar();
  renderTodos();
}

const unorderedListOfProjects = document.querySelector('#listOfProjects');
const todoContainer = document.querySelector('#todoContainer');
const projectHeader = document.querySelector('#projectHeader');

const createProjectButton = document.querySelector('#createProject')
const createTodoButton = document.querySelector('#createTodo')


createProjectButton.addEventListener('click', () => {
  createProject()
  Render()
});

createTodoButton.addEventListener('click', () => {
  createTodo()
  Render()
})

function renderSidebar() {
  unorderedListOfProjects.innerHTML = '';

  listOfProjects.forEach((project, index) => {
    const listItem = document.createElement('li');

    const itemButton = document.createElement('button');
    itemButton.classList.add('itemButton')
    itemButton.textContent = project.name;
    itemButton.addEventListener('click', () => {
      setActiveProject(index);
      Render();
    });

    if (index == getActiveProject()) {
      listItem.classList.add('activeProject')
    } else {
      listItem.classList.remove('activeProject')
    }

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.dataset.index = index

    deleteButton.addEventListener('click', (e) => {
      const index = e.target.dataset.index
      deleteProject(index)
      setActiveProject(index -1)
      Render()
    })

    listItem.append(itemButton, deleteButton);
    unorderedListOfProjects.appendChild(listItem);
  });
}

function renderTodos() {
  const project = listOfProjects[getActiveProject()]
  todoContainer.innerHTML = '';
  projectHeader.innerHTML = ''

  if (project) {
    projectHeader.textContent = project.name;
    
    project.todoList.forEach((todo, index) => {
      todoContainer.appendChild(CreateTodoCard(todo, index));
    });
  }

}

const CreateTodoCard = (todo, index) => {
  const todoCardDiv = document.createElement('div');
  todoCardDiv.classList.add('todoCard');
  todoCardDiv.dataset.todoIndex = index;
  todoCardDiv.textContent = todo.title;
  return todoCardDiv;
};
