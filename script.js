// import Section
import createTaskElement from "./createTask.js";
import renderTasks from "./renderTasks.js";
import addTask from "./addTask.js";
import toggleTaskCompletion from "./toggleTask.js";

// DOM Section
const inputSearch = document.getElementById(`search`);
const searchButton = document.getElementById(`searchBtn`);
const checkBox = document.getElementById(`check`);
const paraText = document.getElementById(`ParaText`);
const editButton = document.getElementById(`edit`);
const deleteButton = document.getElementById(`cancel`);
const mainBody = document.getElementById(`mainBody`);

// Event listener for add task button
searchButton.addEventListener("click", () => addTask(inputSearch));

// Event listener for enter key in input field
inputSearch.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Initial render of tasks
document.addEventListener("DOMContentLoaded", renderTasks);
