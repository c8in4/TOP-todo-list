import ListOfProjects from "./classes/listOfProjects"
import Project from "./classes/project";
import Todo from "./classes/todo";
import { format } from "date-fns"
import { getData } from "./localStorageIO"

export default (() => {
  const newDatabase = new ListOfProjects
  if (getData('projects')) {
    getProjectsFromLocalStorage(newDatabase)
  } else {
    newDatabase.addProject(createDefaultProject())
  }
  return newDatabase
})();

function getProjectsFromLocalStorage(database) {
  if (getData('projects')) {
    const savedProjects = JSON.parse(localStorage.getItem('projects'))
    savedProjects.projects.forEach(project => {
      database.addProject(project)
    });
  }
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