import { format } from "date-fns";
import Todo from "./classes/todo";
import Project from "./classes/project";

export default (projectName) => {
  const project = new Project(projectName);

  const testTodo1 = new Todo({
    title: "todo 1",
    priority: "normal",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    description: "",
  });
  project.addTodo(testTodo1);
  const testTodo2 = new Todo({
    title: "todo 2",
    priority: "normal",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    description: "",
  });
  project.addTodo(testTodo2);
  const testTodo3 = new Todo({
    title: "todo 3",
    priority: "normal",
    dueDate: format(new Date(), "yyyy-MM-dd"),
    description: "",
  });
  project.addTodo(testTodo3);

  return project;
};
