import {tasks, saveTasks} from "./store.js";

function editTask(index) {
  const taskBox = document.querySelector(`.task-container[data-index="${index}"]`);
  const taskText = taskBox?.querySelector(".Paratxt"); // Use optional chaining

  if (!taskText) return; // Exit if task or text not found

  const originalText = taskText.textContent;
  taskText.contentEditable = true;
  taskText.focus();

  // Select all text (simplified)
  document.execCommand("selectAll", false, null);

  // Visual editing hint
  taskText.style.background = "#f0f0f0";
  taskText.style.padding = "2px 5px";
  taskText.style.borderRadius = "3px";

  const finishEdit = () => {
    taskText.contentEditable = false;
    taskText.style.background = "";
    taskText.style.padding = "";

    const newText = taskText.textContent.trim();
    if (!newText) taskText.textContent = originalText; // Revert if empty
    else {
      tasks[index].text = newText;
      saveTasks();
    }
  };

  taskText.addEventListener("blur", finishEdit, {once: true});

  taskText.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      taskText.blur();
    } else if (e.key === "Escape") {
      taskText.textContent = originalText;
      taskText.blur();
    }
  });
}

export default editTask;
