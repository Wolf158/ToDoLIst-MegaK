const form = document.querySelector(".wraper__form");
const taskList = document.querySelector(".wraper__task");
const input = document.querySelector(".wraper__form__input");
const sendBackend = (item) => {
  fetch("http://127.0.0.1:3000/todos", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({ item }),
    headers: { "Content-Type": "application/json" },
  });
};

const generatorTask = (task) => {
  const newTask = `<li class="wraper__task__newTask">${task}<i class="fa-regular cr fa-square-check" title="click if the task is done"></i><i class="fa-sharp cr fa-solid fa-trash" title="click to remove"></i></li>`;
  taskList.innerHTML += newTask;
  sendBackend(newTask);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const task = input.value;
  if (task.length > 0) {
    generatorTask(task);
    input.value = "";
  } else {
    alert("Field not can be empty!!");
  }
});

taskList.addEventListener("click", (e) => {
  const longVariable = e.target.classList;
  const nextVariable = e.target.parentNode;
  if (longVariable.contains("fa-trash")) {
    nextVariable.remove();
  } else if (longVariable.contains("fa-square-check")) {
    nextVariable.classList.toggle("changeComplete");
  }
});
