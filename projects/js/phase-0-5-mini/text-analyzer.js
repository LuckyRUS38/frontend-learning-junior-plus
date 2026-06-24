const text = "кот спит кот ест рыбу кот играет собака спит собака ест";

const words = text.split(" ");

console.log(words.length);
const frequencyWords = words.reduce((acc, w) => {
  if (acc[w] === undefined) acc[w] = 0;
  acc[w] += 1;
  return acc;
}, {});
console.log(frequencyWords);

const [topWord] = Object.entries(frequencyWords).reduce((best, pair) =>
  pair[1] > best[1] ? pair : best,
);
console.log(topWord);

// самое длинное СЛОВО
const longest = words.reduce((best, w) => (w.length > best.length ? w : best));
console.log(longest);

const averageLength = (
  words.reduce((acc, w) => acc + w.length, 0) / words.length
).toFixed(1);
console.log(averageLength);

const buildReport = () => {
  const freqLine = Object.entries(frequencyWords)
    .map(([word, count]) => `${word}: ${count}`)
    .join(", ");

  return `Число слов: ${words.length}
Частота: ${freqLine}
Самое частое: ${topWord}
Самое длинное: ${longest}
Средняя длина: ${averageLength}`;
};
console.log(buildReport());
