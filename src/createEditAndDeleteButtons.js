export default function createEditAndDeleteButtons(
  editButtonEvent,
  deleteButtonEvent,
) {
  const buttonsDiv = document.createElement("div")
  const editButton = document.createElement("button")
  editButton.classList.add("editButton")

  editButton.addEventListener("click", editButtonEvent)

  const deleteButton = document.createElement("button")
  deleteButton.classList.add("deleteButton")

  deleteButton.addEventListener("click", deleteButtonEvent)
  buttonsDiv.append(editButton, deleteButton)
  return buttonsDiv
}
