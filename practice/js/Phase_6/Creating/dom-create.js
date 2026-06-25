const list = document.querySelector(".todo-list");
const li = document.createElement("li");
li.className = "todo";
li.textContent = "Выкопать картофель";
list.append(li);

const anotherLi = document.createElement("li");
anotherLi.className = "todo";
anotherLi.textContent = "Посадить клубнику";
list.prepend(anotherLi);

const todos = document.querySelectorAll(".todo");
todos[1].remove();

const fragment = document.createDocumentFragment();
for (const todo of ["Закончить курс", "Купить молоко", "Купить хлеб"]) {
  const li = document.createElement("li");
  li.className = "todo";
  li.textContent = todo;
  fragment.append(li);
}
list.append(fragment);
