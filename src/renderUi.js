import EditIcon from "./icons/edit-icon.png";
import DeleteIcon from "./icons/delete-icon.png";
import database from "./database";
import { saveData } from "./localStorageIO";
import {
  deleteButtonHandler,
  editButtonHandler,
  newProjectModal,
  newTodoModal,
  saveModalHandler,
  toggleCheckbox,
  toggleDescription,
} from "./eventHandlers";

const PRIORITY_COLORS = {
  low: "var(--clr-info)",
  normal: "var(--clr-warning)",
  high: "var(--clr-danger)",
};

const PRIORITY_VALUES = {
  low: 1,
  normal: 0,
  high: -1,
};

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
  container.dataset.projectId = project.id;

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("projectHeader");

  const header = document.createElement("h2");
  header.innerText = project.name;

  headerContainer.append(header, createEditAndDeleteButtons(project.id));

  const todos = createTodoList(project.todoList);

  const todoButton = document.createElement("button");
  todoButton.classList.add("newTodo");
  todoButton.innerText = "Add To-Do";

  container.append(headerContainer, todoButton, todos);
  return container;
}

function createTodoList(todoList) {
  const todosContainer = document.createElement("div");
  todosContainer.classList.add("todoList");
  // const propertyToSortBy = "title";

  const sortedByDueDate = todoList.sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
  );
  const sortedByPriority = sortedByDueDate.sort(
    (a, b) => PRIORITY_VALUES[a.priority] - PRIORITY_VALUES[b.priority],
  );
  const sortedByCheckedState = sortedByPriority.sort(
    (a, b) => a.checked - b.checked,
  );
  sortedByCheckedState.forEach((todo) => {
    todosContainer.appendChild(createTodo(todo));
  });
  return todosContainer;
}

function createTodo(todo) {
  const todoContainer = document.createElement("div");
  todoContainer.dataset.todoId = todo.id;
  todoContainer.classList.add("todoItem");
  todoContainer.style.borderLeftColor = PRIORITY_COLORS[todo.priority];

  const checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";

  const todoHeader = document.createElement("div");
  todoHeader.classList.add("todoHeader");

  const title = document.createElement("h3");
  title.innerText = todo.title;

  if (todo.checked) {
    checkbox.checked = true;
    title.classList.add("lineThrough");
  }

  todoHeader.append(checkbox, title, createEditAndDeleteButtons());

  const dueDate = document.createElement("small");
  dueDate.innerText = "due: " + todo.dueDate;
  dueDate.classList.add("dueDate");
  if (new Date(todo.dueDate) < new Date()) {
    dueDate.classList.add("overdue");
  }

  const description = document.createElement("p");
  description.innerText = todo.description;
  description.classList.add("hidden", "description");

  todoContainer.append(todoHeader, dueDate, description);
  return todoContainer;
}

function createEditAndDeleteButtons() {
  const container = document.createElement("div");
  container.classList.add("editAndDeleteButtons");

  const editButton = document.createElement("button");
  editButton.classList.add("editButton");
  const editImg = document.createElement("img");
  editImg.classList.add("editImg");
  editImg.src = EditIcon;
  editButton.appendChild(editImg);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  const deleteImg = document.createElement("img");
  deleteImg.classList.add("deleteImg");
  deleteImg.src = DeleteIcon;
  deleteButton.appendChild(deleteImg);

  container.append(editButton, deleteButton);
  return container;
}

function setupEventListeners() {
  const newProjectButton = document.querySelector("button.newProject");
  newProjectButton.addEventListener("click", newProjectModal);

  const newTodoButtons = document.querySelectorAll("button.newTodo");
  if (newTodoButtons) {
    newTodoButtons.forEach((button) =>
      button.addEventListener("click", newTodoModal),
    );
  }

  const deleteButtons = document.querySelectorAll(".deleteButton");
  if (deleteButtons) {
    deleteButtons.forEach((button) =>
      button.addEventListener("click", deleteButtonHandler),
    );
  }

  const todoItems = document.querySelectorAll(".todoItem");
  if (todoItems) {
    todoItems.forEach((todo) =>
      todo.addEventListener("click", toggleDescription),
    );
  }

  const checkboxes = document.querySelectorAll(".checkbox");
  if (checkboxes) {
    checkboxes.forEach((checkbox) =>
      checkbox.addEventListener("click", toggleCheckbox),
    );
  }

  const editButtons = document.querySelectorAll(".editButton");
  if (editButtons) {
    editButtons.forEach((button) =>
      button.addEventListener("click", editButtonHandler),
    );
  }

  const dialogFormButtons = document.querySelector(".dialogFormButtons");
  dialogFormButtons.addEventListener("click", saveModalHandler);
}
