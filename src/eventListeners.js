import database from "./database";
import render from "./renderUi";

import createTestProject from "./createTestProject";
import Todo from "./classes/todo";

export default (event) => {
  const elementWithId = event.target.closest("[data-id]");
  const elementClasses = event.target.classList;

  if (elementClasses.contains("newProject")) {
    console.log("new Project button pressed");

    // should render 'project' modal
    const testProject = createTestProject({ name: "new test project" });
    database.addProject(testProject);
    //
  }

  if (elementWithId) {
    const idsAndIndexes = getIdsAndIndexes(elementWithId);
    console.log(idsAndIndexes);
    if (elementClasses.contains("newTodo")) {
      console.log("new Todo button pressed");

      // should render 'todo' modal
      const testTodo = new Todo({ title: "new test todo" });
      database.projects[idsAndIndexes.projectIndex].addTodo(testTodo);
      //
    }
    if (elementClasses.contains("deleteImg")) {
      console.log("delete button");
      if (!idsAndIndexes.todoId) {
        database.removeProject(idsAndIndexes.projectIndex);
      } else {
        database.projects[idsAndIndexes.projectIndex].removeTodo(
          idsAndIndexes.todoIndex,
        );
      }
    }
    if (elementClasses.contains("editImg")) {
      console.log("edit button");
      // should render 'todo' or 'project' modal
      //
    }
  }

  render();
};

function getIdsAndIndexes(element) {
  const parentElement = element.parentNode.closest("[data-id]");
  let projectId, projectIndex, todoId, todoIndex;
  if (!parentElement) {
    projectId = element.dataset.id;
  } else {
    todoId = element.dataset.id;
    projectId = parentElement.dataset.id;
  }
  projectIndex = getProjectIndexById(projectId);
  todoIndex = getTodoIndexById(projectIndex, todoId);

  return { projectId, projectIndex, todoId, todoIndex };

  function getTodoIndexById(projectIndex, todoId) {
    const index = database.projects[projectIndex].todoList.findIndex(
      (todo) => todo.id === todoId,
    );
    return index;
  }

  function getProjectIndexById(id) {
    const index = database.projects.findIndex((project) => project.id === id);
    return index;
  }
}
