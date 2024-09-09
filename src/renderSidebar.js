import { getListOfProjects } from "./projectsDatabase"

const unorderedListOfProjects = document.querySelector("#listOfProjects")

export default function renderSidebar(activeProject) {
  unorderedListOfProjects.innerHTML = ""

  const listOfProjects = getListOfProjects()

  listOfProjects.forEach((project, index) => {
    const listItem = document.createElement("li")

    const itemButton = document.createElement("button")
    itemButton.classList.add("itemButton")
    itemButton.textContent = project.name
    itemButton.dataset.index = index // could be refactored to not need this
    // would need refactoring of domController.js too

    if (index == activeProject) {
      listItem.classList.add("activeProject")
    } else {
      listItem.classList.remove("activeProject")
    }

    listItem.appendChild(itemButton)
    unorderedListOfProjects.appendChild(listItem)
  })
}
