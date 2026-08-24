const delay = async (ms, text = "") => {
  try {
    await new Promise((resolve, reject) => {
      if (ms < 0) {
        reject(new Error("ms must be positive"));
        return;
      }
      setTimeout(() => {
        resolve(text);
      }, ms);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function trapStep() {
  [1, 2, 3].forEach(async (n) => {
    await delay(1000, n);
    console.log(n);
  });
  console.log("done");
}

async function step() {
  for (const n of [1, 2, 3]) {
    await delay(1000, n);
    console.log(n);
  }
  console.log("done");
}

async function main() {
  const results = await Promise.allSettled([delay(1000, "1"), delay(-2000, "2"), delay(3000, "3")]);
  console.log(results);

  await step();      // await остаётся — просто теперь мы внутри async function, а не на top-level
  await trapStep();
}

main();
