import "./style.css"

import testProjectCreator from "./testProjectCreator";
import database, { createDefaultProject } from "./database";


const testProject1 = testProjectCreator('Project 1')
const testProject2 = testProjectCreator('Project 2')
const defaultProject = createDefaultProject()

database.addProject(testProject1);
database.addProject(testProject2);
database.addProject(defaultProject);
console.log(database);



// import { loadProjects, saveProjects } from "./projectsDatabase"
// import { render } from "./domController"

// loadProjects()

// render()

// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault()
//   saveProjects()
// })