const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

//get data from local storage
let list = JSON.parse(localStorage.getItem("list"));

if (list) {
  list.forEach((task) => {
    toDolist(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDolist();
});

// todolist create  function

function toDolist(task) {
  let newTask = inputEl.value;

  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");

  if (task && task.checked) {
    liEl.classList.add("checked");
  }

  liEl.innerHTML = newTask;
  ulEl.prepend(liEl);
  inputEl.value = "";

  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = ` <i class="fa-solid fa-square-check"></i>`;
  liEl.append(checkBtnEl);

  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
     <i class="fa-solid fa-trash"></i>`;
  liEl.append(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

//? save localStorage date function
function updateLocalStorage() {
  const liEls = document.querySelectorAll("li");

  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerHTML,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
