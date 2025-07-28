export default class ListOfProjects {
    constructor() {
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(projectIndex) {
        this.projects.splice(projectIndex, 1)
    }
}