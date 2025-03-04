import {tasks, saveTasks, renderTasks} from "./store.js";

function deleteTask(index) {
  // Get the overdelete container
  const overdeleteContainer = document.querySelector(".overdelete-container");

  if (!overdeleteContainer) {
    console.error("Overdelete container not found");
    return;
  }

  // Store the task index to be deleted
  overdeleteContainer.dataset.taskIndex = index;

  // Show the delete confirmation modal
  overdeleteContainer.style.display = "flex";

  // Get the confirm and cancel buttons
  const okButton = document.getElementById("okbtn");
  const cancelButton = document.getElementById("cancelbtn");

  if (!okButton || !cancelButton) {
    console.error("Confirmation buttons not found");
    return;
  }

  // Set up one-time event listeners for the buttons
  okButton.onclick = () => {
    // Get the task index from the data attribute
    const taskIndex = Number.parseInt(overdeleteContainer.dataset.taskIndex);

    // Remove task from array
    tasks.splice(taskIndex, 1);

    // Save to localStorage
    saveTasks();

    // Hide the modal
    overdeleteContainer.style.display = "none";

    // Re-render tasks
    renderTasks();

    // Remove the event listeners
    okButton.onclick = null;
    cancelButton.onclick = null;
  };

  cancelButton.onclick = () => {
    // Just hide the modal without deleting
    overdeleteContainer.style.display = "none";

    // Remove the event listeners
    okButton.onclick = null;
    cancelButton.onclick = null;
  };
}

export default deleteTask;
