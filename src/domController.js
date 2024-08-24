import { listOfProjects, getActiveProject, setActiveProject, createProject, createTodo, deleteProject, deleteTodo } from './listOfProjects';

export const Render = () => {
  renderSidebar()
  renderMain();
}

const unorderedListOfProjects = document.querySelector('#listOfProjects');
const todoContainer = document.querySelector('#todoContainer');
const mainTopDiv = document.querySelector('#mainTop')
const createProjectButton = document.querySelector('#createProject')

createProjectButton.addEventListener('click', () => {
  createProject()
  Render()
});

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

    // const deleteButton = document.createElement('button')
    // deleteButton.classList.add('deleteButton')
    // deleteButton.dataset.index = index

    // deleteButton.addEventListener('click', (e) => {
    //   const index = e.target.dataset.index
    //   deleteProject(index)
    //   Render()
    // })

    listItem.appendChild(itemButton);
    unorderedListOfProjects.appendChild(listItem);
  });
}

function renderMain() {
  const project = listOfProjects[getActiveProject()]
  mainTopDiv.innerHTML = ''
  todoContainer.innerHTML = '';

  if (project) {
    renderProjectHeader(project)
    renderTodos(project)
  }

  if (mainTopDiv.innerHTML == '') {
    mainTopDiv.textContent = 'You have no projects'
  }

}

function renderProjectHeader(project) {
  const projectHeader = document.createElement('h2')
  projectHeader.id = 'projectHeader'
  projectHeader.textContent = project.name;

  const createTodoButton = document.createElement('button')
  createTodoButton.id = 'createTodo'
  createTodoButton.textContent = 'Add Task'

  createTodoButton.addEventListener('click', () => {
    createTodo()
    Render()
  })

  mainTopDiv.append(projectHeader, createTodoButton)
}

function renderTodos(project) {
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
