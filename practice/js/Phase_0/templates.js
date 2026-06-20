const nameUser = "Wayne";
const age = 30;
console.log(
  `Hello, ${nameUser}! Your age successfully initialized. You are ${age} years old, ${age >= 18 ? "you are an adult" : "you are a minor"}. How are you?`,
);

console.log(Number(""));
console.log(Number("abc"));
console.log(Boolean("0"));
console.log(Boolean(""));

console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
