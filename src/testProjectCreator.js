import Todo from "./classes/todo";
import Project from "./classes/project";

export default function (projectName) {
    const project = new Project(projectName)

    const testTodo1 = new Todo('todo 1', 'normal', new Date(), '')
    project.addTodo(testTodo1)
    const testTodo2 = new Todo('todo 2', 'normal', new Date(), '')
    project.addTodo(testTodo2)
    const testTodo3 = new Todo('todo 3', 'normal', new Date(), '')
    project.addTodo(testTodo3)

    return project
}

