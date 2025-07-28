import database from "./database"

export default (event) => {
    // if (event.target.classList.contains('newTodo')) {
    // function to add a new todo
    const elementWithId = event.target.closest('[data-id]')
    // const projectIndex = getIndexById(projectId)

    // database.projects[projectIndex].addTodo(testTodo)
    // renderProjects(database.projects)
    console.log(getIndexById(elementWithId.dataset.id));

    console.log();
    // }
    // renderProjects(database.projects)
    // saveData('projects', database)
}

function getIndexById(id) {
    const index = database.projects.findIndex(project => project.id === id)
    return index
}