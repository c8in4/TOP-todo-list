import database from "./database";
import render from "./renderUi";

import createTestProject from "./createTestProject";
import Todo from "./classes/todo";
import { createProjectDialog, createTodoDialog } from "./createModal";
import Project from "./classes/project";

const dialog = document.querySelector("#dialog");

export function newProjectModal() {
  createProjectDialog("New Project");
  const saveFormButton = document.querySelector("#saveFormButton");
  saveFormButton.dataset.type = "newProject";
  dialog.showModal();
}

export function newTodoModal(event) {
  const idsAndIndexes = getIdsAndIndexes(event.target);
  // const currentProject = database.projects[idsAndIndexes.projectIndex];

  createTodoDialog("New Todo");
  const saveFormButton = document.querySelector("#saveFormButton");
  saveFormButton.dataset.type = "newTodo";
  saveFormButton.dataset.projectId = idsAndIndexes.projectId;
  dialog.showModal();
}

export function deleteButtonHandler(event) {
  console.log("delete button pressed");
  database.removeItem(getIdsAndIndexes(event.target));
  render();
}

export function editButtonHandler(event) {
  const idsAndIndexes = getIdsAndIndexes(event.target);

  if (idsAndIndexes.projectId) {
    const currentProject = database.projects[idsAndIndexes.projectIndex];
    if (idsAndIndexes.todoId) {
      console.log("edit todo");
      createTodoDialog("Edit Todo");
      const saveFormButton = document.querySelector("#saveFormButton");
      saveFormButton.dataset.type = "editTodo";
      saveFormButton.dataset.projectId = idsAndIndexes.projectId;
      saveFormButton.dataset.todoId = idsAndIndexes.todoId;

      const title = document.querySelector("#todoTitle");
      const priority = document.querySelector("#todoPriority");
      const dueDate = document.querySelector("#todoDueDate");
      const description = document.querySelector("#todoDescription");

      const todoIndex = currentProject.todoList.findIndex(
        (todo) => todo.id === idsAndIndexes.todoId,
      );
      const currentTodo = currentProject.todoList[todoIndex];
      title.value = currentTodo.title;
      priority.value = currentTodo.priority;
      dueDate.value = currentTodo.dueDate;
      description.value = currentTodo.description;
    } else {
      console.log("edit project");
      createProjectDialog("Edit Project");

      const saveFormButton = document.querySelector("#saveFormButton");
      saveFormButton.dataset.type = "editProject";
      saveFormButton.dataset.projectId = idsAndIndexes.projectId;

      const projectName = dialog.querySelector("#projectName");
      projectName.value = currentProject.name;
    }
    dialog.showModal();
  }
}

export function toggleCheckbox(event) {
  const idsAndIndexes = getIdsAndIndexes(event.target);

  database.projects[idsAndIndexes.projectIndex].todoList[
    idsAndIndexes.todoIndex
  ].changeCheckedState();
  console.log(event.currentTarget);
  render();
}

export function toggleDescription(event) {
  const todoItem = event.currentTarget;
  if (event.target.matches(".editImg") || event.target.matches(".checkbox"))
    return;
  const description = todoItem.querySelector(".description");
  description.classList.toggle("hidden");
}

export function saveModalHandler(event) {
  if (event.target.id != "saveFormButton") return;
  const formType = event.target.dataset.type;
  const dialogFrom = document.querySelector("dialog form");
  const saveFormButton = dialogFrom.querySelector("#saveFormButton");

  if (formType == "newProject") {
    const projectName = dialogFrom.querySelector("#projectName");
    database.addProject(new Project({ name: projectName.value }));
  }

  if (formType == "newTodo") {
    const title = dialogFrom.querySelector("#todoTitle").value;
    const priority = dialogFrom.querySelector("#todoPriority").value;
    const dueDate = dialogFrom.querySelector("#todoDueDate").value;
    const description = dialogFrom.querySelector("#todoDescription").value;
    const projectId = saveFormButton.dataset.projectId;

    database.addTodo(
      projectId,
      new Todo({ title, priority, dueDate, description }),
    );
  }

  if (formType == "editProject") {
    const projectName = dialogFrom.querySelector("#projectName").value;
    const projectId = saveFormButton.dataset.projectId;

    database.updateProject(projectId, projectName);
  }
  if (formType == "editTodo") {
    const title = dialogFrom.querySelector("#todoTitle").value;
    const priority = dialogFrom.querySelector("#todoPriority").value;
    const dueDate = dialogFrom.querySelector("#todoDueDate").value;
    const description = dialogFrom.querySelector("#todoDescription").value;
    const projectId = saveFormButton.dataset.projectId;
    const todoId = saveFormButton.dataset.todoId;

    database.updateTodo(
      { projectId, todoId },
      { title, priority, dueDate, description },
    );
  }

  render();
}

// function getProjectIndex(projectId) {
//   return database.projects.findIndex((project) => project.id === projectId);
// }

function getIdsAndIndexes(element) {
  const todoItem = element.closest("[data-todo-id]");
  const todoId = todoItem ? todoItem.dataset.todoId : null;
  const projectCard = element.closest("[data-project-id]");
  const projectId = projectCard ? projectCard.dataset.projectId : null;
  const projectIndex = database.projects.findIndex(
    (project) => project.id === projectId,
  );
  const todoIndex = database.projects[projectIndex].todoList.findIndex(
    (todo) => todo.id === todoId,
  );
  return { projectId, projectIndex, todoId, todoIndex };
}
