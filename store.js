// Array to store tasks
export let tasks = [];

// Load tasks from localStorage
export function loadTasks() {
  const savedTasks = localStorage.getItem("todoTasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
}

// Save tasks to localStorage
export function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Import the renderTasks function to avoid circular dependencies
import renderTasksFunction from "./renderTasks.js";

// Export the renderTasks function
export const renderTasks = renderTasksFunction;

// Load tasks immediately when this module is imported
loadTasks();
