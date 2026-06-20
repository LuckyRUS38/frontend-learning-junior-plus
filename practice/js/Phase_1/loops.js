for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

const names = ["Anna", "Bob", "Charlie"];

for (const n of names) {
  console.log(n);
}

for (const n of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
  if (n % 3 !== 0) {
    continue;
  }
  console.log(n);
}
