import ListOfProjects from "./classes/listOfProjects"
import { getData } from "./localStorageIO"
import createDefaultProject from "./createDefaultProject"

export let database = initDatabase()

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
  if (getData('projects')) {
    const savedProjects = JSON.parse(localStorage.getItem('projects'))
    savedProjects.projects.forEach(project => {
      database.addProject(project)
    });
  }
}
