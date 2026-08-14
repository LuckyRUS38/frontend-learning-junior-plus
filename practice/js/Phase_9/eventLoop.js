console.log("1: sync");

setTimeout(() => {
  console.log("4: async")
}, 0);

Promise.resolve().then(() => {
  console.log("2: async")
});

queueMicrotask(() => console.log("3: microtask"))
