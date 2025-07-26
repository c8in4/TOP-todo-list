import ListOfProjects from "./classes/listOfProjects"
import Project from "./classes/project";
import Todo from "./classes/todo";
import { format } from "date-fns"
import { getData } from "./localStorageIO"

export default function () {
  const newDatabase = new ListOfProjects
  if (getData('projects')) {
    getProjectsFromLocalStorage(newDatabase)
  } else {
    newDatabase.addProject(createDefaultProject())
  }
  return newDatabase
}

function getProjectsFromLocalStorage(database) {
  const savedProjects = getData('projects')
  savedProjects.projects.forEach(project => {
    const newProject = new Project(project.name, project.id)
    project.todoList.forEach(todo => {
      newProject.addTodo(new Todo(todo.title, todo.dueDate, todo.priority, todo.description, todo.id))
    });
    database.addProject(newProject)
  });
}

function createDefaultProject() {
  const defaultProject = new Project("Default Project")
  const exampleTodo = new Todo(
    "Example Todo",
    "normal",
    format(new Date(), "yyyy-MM-dd"),
    "This is just an example of a Todo with a description",
  )
  defaultProject.addTodo(exampleTodo)
  return defaultProject
}
