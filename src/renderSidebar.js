import { getListOfProjects } from "./projectsDatabase"

const unorderedListOfProjects = document.querySelector("#listOfProjects")

export default function renderSidebar(
  activeProject,
  listOfProjects = getListOfProjects(),
) {
  unorderedListOfProjects.innerHTML = ""

  listOfProjects.forEach((project, index) => {
    const listItem = document.createElement("li")

    const itemButton = document.createElement("button")
    itemButton.classList.add("itemButton")
    itemButton.textContent = project.name
    itemButton.dataset.index = index // not sure if I will need this

    if (index == activeProject) {
      listItem.classList.add("activeProject")
    } else {
      listItem.classList.remove("activeProject")
    }

    listItem.appendChild(itemButton)
    unorderedListOfProjects.appendChild(listItem)
  })
}
