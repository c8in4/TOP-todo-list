import ListOfProjects from "./classes/listOfProjects"
import Project from "./classes/project";
import Todo from "./classes/todo";
import { format } from "date-fns"
import { getData } from "./localStorageIO"

export default initDatabase()

function initDatabase() {
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
    const newProject = new Project(project)
    project.todoList.forEach(todo => {
      newProject.addTodo(new Todo(todo))
    });
    database.addProject(newProject)
  });
}

function createDefaultProject() {
  const defaultProject = new Project({ name: "Default Project" })
  const exampleTodo = new Todo(
    {
      title: "Example Todo",
      priority: "normal",
      dueDate: format(new Date(), "yyyy-MM-dd"),
      description: "This is just an example of a Todo with a description",
    }
  )
  defaultProject.addTodo(exampleTodo)
  return defaultProject
}
