const title = document.getElementById("title");
title.style.color = "red";
title.style.fontSize = "42px";
const computed = getComputedStyle(title);
console.log(computed.color);

document.body.style.setProperty("--accent", "#ff0000");
console.log(getComputedStyle(document.body).getPropertyValue("--accent"));

const todos = document.querySelectorAll(".todo");
todos[0].classList.add("highlight");
