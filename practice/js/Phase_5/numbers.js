const str = " 250 рублей";
const num = parseInt(str.trim());
console.log(
  num,
  Number.isInteger(num),
  Number.isInteger(42),
  Number.isInteger(42.5),
);

const sum = 1234.5678;
const newFormat = sum.toFixed(2);
console.log(newFormat, typeof newFormat);

const arr = [7, 2, 9, 1];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

const rollDice = () => {
  return Math.floor(Math.random() * (6 - 1 + 1) + 1);
};

console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
