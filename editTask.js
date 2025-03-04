import {tasks, saveTasks} from "./store.js";

function editTask(index) {
  // Get the task to edit
  const task = tasks[index];

  // Get the task container
  const taskContainer = document.querySelector(`.task-container[data-index="${index}"]`);

  // If the task container exists
  if (taskContainer) {
    // Get the paragraph element containing the task text
    const paraTxt = taskContainer.querySelector(".Paratxt");

    // If the paragraph element exists
    if (paraTxt) {
      // Create an input element
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.className = "edit-input";
      inputElement.style.width = "100%";
      inputElement.style.padding = "4px";
      inputElement.style.border = "1px solid #ccc";
      inputElement.style.borderRadius = "4px";
      inputElement.value = task.text;

      // Replace the paragraph element with the input element
      paraTxt.replaceWith(inputElement);

      // Focus on the input element
      inputElement.focus();

      // Add an event listener to the input element to save the changes when the user presses Enter or clicks outside the input
      inputElement.addEventListener("blur", saveChanges);
      inputElement.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          saveChanges();
        }
      });

      function saveChanges() {
        // Get the new task text from the input element
        const newTaskText = inputElement.value.trim();

        // If the new task text is not empty
        if (newTaskText) {
          // Update the task text in the tasks array
          task.text = newTaskText;

          // Save the updated tasks
          saveTasks();

          // Create a new paragraph element with the updated task text
          const newParaTxt = document.createElement("p");
          newParaTxt.className = "Paratxt";
          newParaTxt.textContent = newTaskText;

          // Replace the input element with the new paragraph element
          inputElement.replaceWith(newParaTxt);

          // Re-render the tasks to update the UI
          if (task.completed) {
            newParaTxt.style.textDecoration = "line-through";
            newParaTxt.style.color = "#888";
          }
        } else {
          // If the new task text is empty, revert to the original task text
          const newParaTxt = document.createElement("p");
          newParaTxt.className = "Paratxt";
          newParaTxt.textContent = task.text;
          inputElement.replaceWith(newParaTxt);
        }
      }
    }
  }
}

export default editTask;
