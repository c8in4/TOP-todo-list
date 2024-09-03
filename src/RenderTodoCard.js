export const RenderTodoCard = (todo, index) => {
  const todoCardDiv = document.createElement("div")
  todoCardDiv.classList.add("todoCard")
  todoCardDiv.dataset.todoIndex = index // might not need this

  const todoCardHeaderDiv = document.createElement("div")
  todoCardHeaderDiv.classList.add('todoCardHeaderDiv')

  const title = document.createElement("h4")
  title.classList.add('todoCardHeader')
  title.textContent = todo.title

  const dueDate = document.createElement('p')
  dueDate.textContent = todo.dueDate

  const priority = document.createElement('p')
  priority.textContent = todo.priority


  const buttonsDiv = document.createElement('div')
  const editButton = document.createElement("button")
  editButton.classList.add("editButton")

  editButton.addEventListener("click", () => {
 
  })

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")

  deleteButton.addEventListener("click", () => {
  
  })
  buttonsDiv.append(editButton, deleteButton)

  todoCardHeaderDiv.append(title, dueDate, priority, buttonsDiv)

  const note = document.createElement("p")
  note.classList.add('todoCardNote', 'hidden')
  note.textContent = todo.note

  todoCardDiv.append(todoCardHeaderDiv, note)

  return todoCardDiv
}
