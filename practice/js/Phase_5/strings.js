const raw = " artemiy KUZNETSOV ";
const trimmed = raw.trim().toLowerCase();
console.log(trimmed);

const hwld = "hello          world";
const upperHwld = hwld
  .split(" ")
  .filter(Boolean)
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(upperHwld);

const email = "test@mail.ru";
console.log(email.includes("@") && email.endsWith(".ru"));
const data = "2025-06-21";
const splitData = data.split("-");
splitData.reverse();
console.log(splitData.join("."));

console.log("7".padStart(3, "0"));
