const delay = (ms, text = "") => {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("ms must be positive"));
      return;
    }
    setTimeout(() => {
      resolve(text);
    }, ms);
  });
}

Promise.allSettled([delay(1000, "1"), delay(-1000, "2"), delay(-2000, "3")])
  .then((results) => {
    console.log(results);

    let countRejects = results.filter((r) => r.status === "rejected");
    let countFulFilled = results.filter((r) => r.status === "fulfilled");

    console.log("Fulfilled: ", countFulFilled.length, "Rejected: ", countRejects.length);
  });
