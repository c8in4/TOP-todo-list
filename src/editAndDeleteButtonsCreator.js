export default function createEditAndDeleteButtons() {
  const buttonsDiv = document.createElement("div")
  buttonsDiv.classList.add("editAndDeleteButtons")

  const editButton = document.createElement("button")
  editButton.classList.add("editButton")

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")

  buttonsDiv.append(editButton, deleteButton)
  return buttonsDiv
}
