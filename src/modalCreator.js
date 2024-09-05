export const dialog = document.querySelector("#dialog")
export const dialogHeader = document.querySelector("#dialogHeader")
export const dialogFormContent = document.querySelector("#dialogFormContent")

dialog.addEventListener("close", () => {
  dialogHeader.textContent = ""
  dialogFormContent.innerHTML = ""
})

export const CreateProjectDialog = (headerText) => {
  dialogHeader.textContent = headerText
  const projectNameInput = createTextInput("Project Name:", "projectName")
  dialogFormContent.append(projectNameInput)
}

export const CreateTodoDialog = (headerText) => {
  dialogHeader.textContent = headerText
  const todoTitleInput = createTextInput("Todo Title:", "todoTitle")

  const todoNoteTextarea = createTextarea("Note:", "todoNote")

  dialogFormContent.append(todoTitleInput, todoNoteTextarea)
}

function createTextInput(label, id) {
  const inputLabel = document.createElement("label")
  const labelText = document.createElement("p")

  inputLabel.for = id
  labelText.textContent = label
  const input = document.createElement("input")
  input.id = id
  inputLabel.append(labelText, input)
  return inputLabel
}

function createTextarea(label, id) {
  const inputLabel = document.createElement("label")
  const labelText = document.createElement("p")
  inputLabel.for = id
  labelText.textContent = label

  const textarea = document.createElement("textarea")
  textarea.id = id
  textarea.cols = 45
  textarea.rows = 5
  inputLabel.append(labelText, textarea)
  return inputLabel
}
