import { format } from "date-fns"
import Project from "./classes/project"
import Todo from "./classes/todo"

export default () => {
    const defaultProject = new Project("Default Project")
    const exampleTodo = new Todo(
        "Example Todo",
        "normal",
        format(new Date(), "yyyy-MM-dd"),
        "This is just an example of a Todo with a description",
    )
    defaultProject.addTodo(exampleTodo)
    return defaultProject
}