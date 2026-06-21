const sumTo = (n) => {
  if (n <= 1) return n;
  return n + sumTo(n - 1);
};

console.log(sumTo(100));

const countdown = (n) => {
  if (n <= 0) return "Старт!";
  return `${n} ${countdown(n - 1)}`;
};

console.log(countdown(10));

const double = (arr) => {
  const result = [];
  for (const e of arr) {
    result.push(e * 2);
  }
  return result;
};
const originalArr = [1, 2, 3, 4, 5];
console.log(double(originalArr));
console.log(originalArr);
