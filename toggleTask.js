import {tasks, saveTasks, renderTasks} from "./store.js";

function toggleTaskCompletion(index) {
  // Toggle the completed status
  tasks[index].completed = !tasks[index].completed;

  // Save to localStorage
  saveTasks();

  // Re-render tasks
  renderTasks();
}

export default toggleTaskCompletion;
