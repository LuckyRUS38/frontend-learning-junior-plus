document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Enter") {
    e.preventDefault();
    console.log("Submit!");
  } else if (e.key === "Escape") {
    e.preventDefault();
    console.log("Cancel!");
  }
});

const input = document.querySelector(".input-todo");
input?.addEventListener("blur", () => {
  console.log("unfocused");
});

input?.addEventListener("focus", () => {
  console.log("focused");
});

const form = document.querySelector(".form-sub");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
});

const buttonForm = document.querySelector(".btn-submit");
buttonForm.addEventListener("counter:changed", (e) => {
  console.log("counter changed", e.detail.value);
});

buttonForm.dispatchEvent(
  new CustomEvent("counter:changed", { detail: { value: 5 } }),
);
