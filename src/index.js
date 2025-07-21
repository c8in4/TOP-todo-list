import "./style.css"
import { database, saveProjects, loadProjects, createDefaultProject } from "./database";

loadProjects()

console.log(database)

saveProjects()


// import { loadProjects, saveProjects } from "./projectsDatabase"
// import { render } from "./domController"

// loadProjects()

// render()

// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault()
//   saveProjects()
// })