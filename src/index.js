import "./style.css"
import testProjectCreator from "./testProjectCreator";

const testProject1 = testProjectCreator('Project 1')
const testProject2 = testProjectCreator('Project 2')

console.table(testProject1.todoList);
console.table(testProject2.todoList);

// import { loadProjects, saveProjects } from "./projectsDatabase"
// import { render } from "./domController"

// loadProjects()

// render()

// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault()
//   saveProjects()
// })