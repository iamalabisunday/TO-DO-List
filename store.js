// Create a new store.js file to centralize shared state
// This file will export shared variables and functions

// DOM elements that need to be accessed across modules
export const inputSearch = document.getElementById("search");
export const mainBody = document.getElementById("mainBody");

// Tasks array from localStorage
export const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to save tasks to localStorage
export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Import renderTasks to avoid circular dependency
import renderTasksFunction from "./renderTasks.js";

// Export renderTasks function
export const renderTasks = renderTasksFunction;
