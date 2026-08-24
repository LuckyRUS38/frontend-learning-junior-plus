setTimeout(() => {
  console.log("Шаг 1");
  setTimeout(() => {
    console.log("Шаг 2");
    setTimeout(() => {
      console.log("Шаг 3");
    }, 1000);
  }, 1000);
}, 1000);

let count = 0;

const intervalId = setInterval(() => {
  if (count === 5) {
    clearInterval(intervalId);
    return;
  }
  count++;
  console.log(count);
}, 500);
