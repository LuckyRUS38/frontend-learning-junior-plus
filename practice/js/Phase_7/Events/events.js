const btn = document.querySelector(".btn-add-todo");

btn.addEventListener("click", (e) => {
  console.log("Нажато", e.type);
});

const todoList = document.querySelector(".todo-list");
todoList.addEventListener("click", (e) => {
  console.log(e.target, e.currentTarget);
});

const todoInput = document.querySelector(".input-todo");
todoInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const onceBtn = document.querySelector(".btn");
onceBtn.addEventListener(
  "click",
  (e) => {
    console.log("Нажато только раз!", e.type);
  },
  { once: true },
);
