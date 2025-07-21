export default class ListOfProjects {
    constructor() {
        this.projects = []
    }

    addProject(project) {
        this.projects.push(project)
    }

    removeProject(projectId) {
        const indexOfProjectToDelete = this.projects.findIndex(project => {
            return project.id == projectId
        })
        this.projects.splice(indexOfProjectToDelete, 1)
    }
}