const queue = ["Аня", "Боб"];
queue.push("Вера");
queue.unshift("Гена");
queue.shift();
queue.pop();
console.log(queue);

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4), "Original:", arr);

const needSlice = [...arr];
needSlice.splice(2, 2);
console.log("Original:", needSlice);
console.log(arr === needSlice);
console.log(needSlice.indexOf(2), needSlice.indexOf(-2));

// Structured Clone
const needClone = structuredClone(arr);
console.log("Original:", arr, "Clone:", needClone);
console.log(arr === needClone);
