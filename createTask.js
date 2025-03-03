import editTask from "./editTask.js";
import deleteTask from "./deleteTask.js";
import toggleTaskCompletion from "./toggleTask.js";

// Taken a single task object and its index to creates the HTML elements to display task area
// Function to create a task element
function createTaskElement(task, index) {
  // Create main container
  const taskContainerDiv = document.createElement(`div`);
  taskContainerDiv.classList.add(`task-container`);
  taskContainerDiv.dataset.index = index; // We are adding a number to
  //  the box, so we know which task this box represents.

  // Create check-text container
  const checkTextDiv = document.createElement(`div`);
  checkTextDiv.classList.add(`check-text`);

  // Create checkbox image
  const checkBoxImg = document.createElement(`img`);
  checkBoxImg.classList.add(`check`);
  // If the task is done, it shows a check image, otherswise, it shows an Uncheck Image.
  checkBoxImg.setAttribute(`src`, task.completed ? `./check.svg` : `./Uncheck.svg`);
  checkBoxImg.setAttribute(`alt`, `check`);
  // When one click on the checkbox, it calls its function to mark the task as done or undone.
  checkBoxImg.addEventListener("click", () => toggleTaskCompletion(index));

  // Create task text container
  const taskTextDiv = document.createElement(`div`);
  taskTextDiv.classList.add(`task-txt`);

  // Create paragraph for task text
  const paraTxt = document.createElement(`p`);
  paraTxt.classList.add(`Paratxt`);
  // The text content of the task is placed inside the paragraph element.
  paraTxt.textContent = task.text;
  // if the task is done, we put a line through the text and make it gray
  if (task.completed) {
    paraTxt.style.textDecoration = "line-through";
    paraTxt.style.color = "#888";
  }

  // Create edit-cancel container
  const editCancel = document.createElement(`div`);
  editCancel.classList.add(`edit-cancel`);

  // Create edit button
  const editImg = document.createElement(`img`);
  editImg.classList.add(`edit`);
  editImg.setAttribute(`src`, `./tabler_edit.svg`);
  editImg.setAttribute(`alt`, `edit`);
  // When one click the delete button, it calls a function "editTask" to activate
  editImg.addEventListener("click", () => editTask(index));

  // Create delete button
  const deleteImg = document.createElement(`img`);
  deleteImg.classList.add(`cancel`);
  deleteImg.setAttribute(`src`, `./gravity-ui_delete.svg`);
  deleteImg.setAttribute(`alt`, `delete`);
  // When one click the delete button, it calls a function "deleteTask" to activate
  deleteImg.addEventListener("click", () => deleteTask(index));

  // Append elements in correct order
  taskTextDiv.appendChild(paraTxt);
  checkTextDiv.appendChild(checkBoxImg);
  checkTextDiv.appendChild(taskTextDiv);
  editCancel.appendChild(editImg);
  editCancel.appendChild(deleteImg);
  taskContainerDiv.appendChild(checkTextDiv);
  taskContainerDiv.appendChild(editCancel);

  return taskContainerDiv;
}

export default createTaskElement;
