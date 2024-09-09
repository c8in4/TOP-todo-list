const dialogHeader = document.querySelector("#dialogHeader")
const dialogFormContent = document.querySelector("#dialogFormContent")
const dialogFormButtons = document.querySelector(".dialogFormButtons")

export function createProjectDialog(headerText) {
  resetDialog()

  dialogHeader.textContent = headerText
  const projectNameInput = createTextInput("Project Name:", "projectName")

  dialogFormContent.append(projectNameInput)
  createFormButtons()
}

export function createTodoDialog(headerText) {
  resetDialog()

  dialogHeader.textContent = headerText
  const todoTitleInput = createTextInput("Todo Title:", "todoTitle")

  const groupDiv = document.createElement("div")
  const todoPriorityInput = createSelectInput("Priority:", "todoPriority")
  const todoDueDate = createDateInput("Due Date:", "todoDueDate")
  groupDiv.append(todoPriorityInput, todoDueDate)

  const todoNoteTextarea = createTextarea("Description:", "todoDescription")

  dialogFormContent.append(todoTitleInput, groupDiv, todoNoteTextarea)
  createFormButtons()
}

function resetDialog() {
  dialogHeader.textContent = ""
  dialogFormContent.innerHTML = ""
  dialogFormButtons.innerHTML = ""
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

function createSelectInput(label, id) {
  const inputLabel = document.createElement("label")
  const labelText = document.createElement("p")
  inputLabel.for = id
  labelText.textContent = label

  const input = document.createElement("select")
  input.name = id
  input.id = id

  function createOption(value, text) {
    const option = document.createElement("option")
    option.name = value
    option.value = value
    option.textContent = text

    return option
  }

  const optionNormal = createOption("normal", "Normal")
  optionNormal.selected = "selected"
  const optionLow = createOption("low", "Low")
  const optionHigh = createOption("high", "High")

  input.append(optionLow, optionNormal, optionHigh)

  inputLabel.append(labelText, input)
  return inputLabel
}

function createDateInput(label, id) {
  const inputLabel = document.createElement("label")
  const labelText = document.createElement("p")
  inputLabel.for = id
  labelText.textContent = label

  const input = document.createElement("input")
  input.type = "date"
  input.valueAsDate = new Date()
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

function createFormButtons() {
  const saveFormButton = document.createElement("button")
  saveFormButton.id = "saveFormButton"
  saveFormButton.value = "default"
  saveFormButton.textContent = "Save"

  const cancelFormButton = document.createElement("button")
  cancelFormButton.value = "cancelFormButton"
  cancelFormButton.formMethod = "dialog"
  cancelFormButton.textContent = "Cancel"

  dialogFormButtons.append(saveFormButton, cancelFormButton)
}
