const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", (e) => {
  const todo = e.target.closest(".todo");
  if (!todo) return;
  if (e.target.matches(".del")) {
    e.target.closest(".todo").remove();
    return;
  }
  todo.classList.toggle("done");
});

const button = document.querySelector(".btn-add-todo");
const input = document.querySelector(".input-todo");
console.log(input);
button.addEventListener("click", () => {
  const todo = document.createElement("li");
  const delButton = document.createElement("button");
  delButton.classList.add("del");
  delButton.textContent = "✖";
  todo.classList.add("todo");
  todo.textContent = input.value;
  input.value = "";
  todo.appendChild(delButton);
  todoList.appendChild(todo);
});
