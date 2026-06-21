const prices = [100, 250, 50, 400, 150];
const updatedPrices = prices.map((price) => price * 1.2);
console.log(updatedPrices);

const filteredPrices = updatedPrices.filter((price) => price > 100);
console.log(filteredPrices);

const total = filteredPrices.reduce((acc, price) => acc + price, 0);
console.log(total);

const result = prices
  .filter((price) => price > 100)
  .map((price) => price * 0.9)
  .reduce((acc, n) => acc + n, 0);
console.log(result);

console.log(prices.find((n) => n > 300));
console.log(prices.some((n) => n < 60));
console.log(prices.every((n) => n > 0));
console.log(prices.findIndex((n) => n > 300));
