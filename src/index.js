document.addEventListener("DOMContentLoaded", () => {

  // form and input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  // ul for new task description
  const newUl = document.getElementById('tasks');

  // attaching event listeners
  newTaskForm.addEventListener("submit", (e) => {
    // stop form from submit
    e.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    
    newUl.appendChild(newTask);
    
    // reset form
    e.target.reset();
  })
});