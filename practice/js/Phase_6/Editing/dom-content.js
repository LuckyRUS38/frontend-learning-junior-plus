const title = document.getElementById("title");
title.textContent = "Мой список задач";

const firstTodo = document.querySelector(".todo");
console.log(firstTodo.classList.contains("done"));
firstTodo.classList.toggle("done");
console.log(firstTodo.classList.contains("done"));

const btn = document.querySelector(".btn");
btn.setAttribute("disabled", "");
console.log(btn.getAttribute("data-action"));
btn.removeAttribute("disabled");

const todos = document.querySelectorAll(".todo");
todos[1].insertAdjacentHTML("beforeend", "<em>(важно)</em>");
