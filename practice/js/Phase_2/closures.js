function makeCounter() {
  let count = 0;
  console.log(count);
  return () => {
    count++;
    console.log(count);
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

const other = makeCounter();
console.log(other());

const makeMultiplier = (factor) => {
  return (num) => {
    return num * factor;
  };
};

const triple = makeMultiplier(3);
console.log(triple(5));
