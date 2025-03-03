import {tasks, saveTasks, renderTasks} from "./store.js";

function addTask(inputSearch) {
  const taskText = inputSearch.value.trim();
  if (taskText === "") return; // Don't add empty tasks

  // Create new task object
  const newTask = {
    text: taskText,
    completed: false,
  };

  // Add to tasks array
  tasks.push(newTask);

  // Save to localStorage
  saveTasks();

  // Clear input field
  inputSearch.value = "";

  // Render tasks
  renderTasks();
}

export default addTask;
