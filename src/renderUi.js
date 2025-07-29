import EditIcon from "./icons/edit-icon.png";
import DeleteIcon from "./icons/delete-icon.png";
import database from "./database";
import { saveData } from "./localStorageIO";
import eventListeners from "./eventListeners";

export default () => {
  const mainContainer = document.querySelector("main");
  mainContainer.innerText = "";
  database.projects.forEach((project) => {
    mainContainer.appendChild(createProjectCard(project));
  });
  saveData("projects", database);
  setupEventListeners();
};

function createProjectCard(project) {
  const container = document.createElement("div");
  container.classList.add("projectCard");
  container.dataset.id = project.id;

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("projectHeader");

  const header = document.createElement("h2");
  header.innerText = project.name;

  headerContainer.append(header, createEditAndDeleteButtons(project.id));

  const todos = createTodoList(project.todoList);

  const todoButton = document.createElement("button");
  todoButton.classList.add("newTodo");
  todoButton.innerText = "Add new Todo";

  container.append(headerContainer, todoButton, todos);
  return container;
}

function createTodoList(todoList) {
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todoList");
  todoList.forEach((todo) => {
    todosContainer.appendChild(createTodo(todo));
  });
  return todosContainer;
}

function createTodo(todo) {
  const todoContainer = document.createElement("div");
  todoContainer.dataset.id = todo.id;
  todoContainer.classList.add("todoItem");

  // const checkbox = document.createElement('input')
  // checkbox.type = 'checkbox'

  const title = document.createElement("h3");
  title.innerText = todo.title;

  if (todo.checked) {
    // checkbox.checked = true
    title.classList.add("lineThrough");
  }

  const dueDate = document.createElement("p");
  dueDate.innerText = "due: " + todo.dueDate;

  const priority = document.createElement("p");
  priority.innerText = "priority: " + todo.priority;

  const description = document.createElement("p");
  description.innerText = todo.description;
  description.classList.add("hidden");

  todoContainer.append(
    // checkbox,
    title,
    createEditAndDeleteButtons(todo.id),
    dueDate,
    priority,
    description,
  );
  return todoContainer;
}

function createEditAndDeleteButtons() {
  const container = document.createElement("div");
  container.classList.add("editAndDeleteButtons");

  const editButton = document.createElement("button");
  const editImg = document.createElement("img");
  editImg.classList.add("editImg");
  editImg.src = EditIcon;
  editButton.appendChild(editImg);

  const deleteButton = document.createElement("button");
  const deleteImg = document.createElement("img");
  deleteImg.classList.add("deleteImg");
  deleteImg.src = DeleteIcon;
  deleteButton.appendChild(deleteImg);

  container.append(editButton, deleteButton);
  return container;
}

function setupEventListeners() {
  const body = document.querySelector("body");
  body.addEventListener("click", eventListeners);
}
