import {tasks, saveTasks, renderTasks} from "./store.js";

function deleteTask(index) {
  // Confirm before deleting
  if (confirm("Are you sure you want to delete this task?")) {
    // Remove task from array
    tasks.splice(index, 1);

    // Save to localStorage
    saveTasks();

    // Re-render tasks
    renderTasks();
  }
}

export default deleteTask;
