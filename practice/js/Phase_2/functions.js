console.log(isEven(20));
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(21));

const toCelsius = (f) => (f - 32) * (5 / 9);
console.log(toCelsius(72));

const describe = (name, age) => {
  return `${name} is ${age} years old.`;
};
console.log(cube(10));
const cube = function (x) {
  return x * x * x;
};
