import "./style.css"
import { loadProjects, saveProjects } from "./projectsDatabase"
import { render } from "./domController"

loadProjects()

render()

window.addEventListener("beforeunload", (event) => {
  event.preventDefault()
  saveProjects()
})
