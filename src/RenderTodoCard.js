import {
  editTodo,
  deleteTodo,
  listOfProjects,
  getActiveProject,
} from "./listOfProjects"
import { Render } from "./domController"
import {
  dialog,
  dialogHeader,
  dialogFormContent,
  CreateTodoDialog,
} from "./modalCreator"

const saveFormButton = document.querySelector("#saveFormButton")

export const RenderTodoCard = (todo, index) => {
  const todoCardDiv = document.createElement("div")
  todoCardDiv.classList.add("todoCard")
  todoCardDiv.dataset.todoIndex = index // might not need this

  const todoCardHeaderDiv = document.createElement("div")
  todoCardHeaderDiv.classList.add("todoCardHeaderDiv")

  const title = document.createElement("h4")
  title.classList.add("todoCardHeader")
  title.textContent = todo.title

  const dueDate = document.createElement("p")
  dueDate.textContent = todo.dueDate

  const priority = document.createElement("p")
  priority.textContent = todo.priority

  const buttonsDiv = document.createElement("div")
  const editButton = document.createElement("button")
  editButton.classList.add("editButton")

  editButton.addEventListener("click", () => {
    CreateTodoDialog("Edit Todo")

    const todoTitle = document.querySelector("#todoTitle")
    const todoNote = document.querySelector("#todoNote")
    const currentTodo = listOfProjects[getActiveProject].todoList[index]
    

    todoNote.saveFormButton.addEventListener("click", () => {
      editTodoEvent(index)
    })
    dialog.showModal()

    Render()
  })

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")
  deleteButton.addEventListener("click", () => {
    deleteTodo(index)
    Render()
  })
  buttonsDiv.append(editButton, deleteButton)

  todoCardHeaderDiv.append(title, dueDate, priority, buttonsDiv)

  const note = document.createElement("p")
  note.classList.add("todoCardNote", "hidden")
  note.textContent = todo.note

  todoCardDiv.append(todoCardHeaderDiv, note)

  return todoCardDiv
}

function editTodoEvent(index) {
  editTodo(todoTitle.value, todoNote.value)
  saveFormButton.removeEventListener("click", editTodoEvent)
}
