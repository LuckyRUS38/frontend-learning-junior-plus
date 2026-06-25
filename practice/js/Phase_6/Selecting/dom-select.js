const title = document.getElementById("title");
console.log(title.textContent);

const todos = document.querySelectorAll(".todo");
console.log(todos.length);
for (const todo of todos) {
  console.log(todo.textContent);
}

const doneTodo = document.querySelector(".todo.done");
console.log(doneTodo.textContent);

const nearestParent = todos[0].closest(".todo-list");
console.log(nearestParent);

console.log(!todos[0].matches(".done"));

const btn = document.querySelector(".btn");
console.log(btn.dataset.action);
