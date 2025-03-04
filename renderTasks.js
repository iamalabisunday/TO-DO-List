import {tasks} from "./store.js";
import createTaskElement from "./createTask.js";

// Function to render all tasks
function renderTasks() {
  // Get the mainBody element
  const mainBody = document.getElementById("mainBody");

  // If mainBody doesn't exist, exit early
  if (!mainBody) {
    console.error("Main body element not found");
    return;
  }

  // Clear the main body first
  mainBody.innerHTML = "";

  // If there are no tasks, show a message
  if (tasks.length === 0) {
    const noTasksMsg = document.createElement("p");
    noTasksMsg.textContent = "No tasks yet. Add a task to get started!";
    noTasksMsg.style.textAlign = "center";
    noTasksMsg.style.padding = "2rem";
    noTasksMsg.style.color = "#888";
    mainBody.appendChild(noTasksMsg);
    return;
  }

  // Create and append task elements for each task
  tasks.forEach((task, index) => {
    const taskElement = createTaskElement(task, index);
    mainBody.appendChild(taskElement);
  });
}

export default renderTasks;
