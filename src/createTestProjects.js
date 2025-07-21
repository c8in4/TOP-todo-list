import { format } from "date-fns";
import Todo from "./classes/todo";
import Project from "./classes/project";

export default (projectName) => {
    const project = new Project(projectName)

    const testTodo1 = new Todo('todo 1', 'normal', format(new Date(), "yyyy-MM-dd"), '')
    project.addTodo(testTodo1)
    const testTodo2 = new Todo('todo 2', 'normal', format(new Date(), "yyyy-MM-dd"), '')
    project.addTodo(testTodo2)
    const testTodo3 = new Todo('todo 3', 'normal', format(new Date(), "yyyy-MM-dd"), '')
    project.addTodo(testTodo3)

    return project
}

