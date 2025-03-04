import {renderTasks} from "./store.js";
import addTask from "./addTask.js";

// Initial render of tasks when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // DOM Section - moved inside DOMContentLoaded to ensure elements exist
  const inputSearch = document.getElementById("search");
  const searchButton = document.getElementById("searchBtn");
  const overdeleteContainer = document.querySelector(".overdelete-container");

  // Hide the overdelete container by default
  if (overdeleteContainer) {
    overdeleteContainer.style.display = "none";
  }

  // Event listener for add task button
  if (searchButton) {
    searchButton.addEventListener("click", () => addTask(inputSearch));
  }

  // Event listener for enter key in input field
  if (inputSearch) {
    inputSearch.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask(inputSearch);
      }
    });
  }

  // Render tasks
  renderTasks();
});
