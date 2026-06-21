const scores = [50, 9, 100, 23, 8];
console.log(
  [...scores].sort((a, b) => a - b),
  "Proofs:",
  scores,
);
console.log([...scores].sort((a, b) => b - a));

const arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat());
console.log(arr.flat(Infinity));

const arr2 = ["привет мир", "как дела"];
console.log(arr2.flatMap((str) => str.split(" ")));

const arrFrom = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(arrFrom);

console.log(scores.includes(100));
console.log(scores.join(", "));
