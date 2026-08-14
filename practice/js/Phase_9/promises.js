function delay(ms, value) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('ms must be a positive number'))
      return
    }
    setTimeout(() => {
      resolve(value)
    }, ms)
  })
}

delay(500, 1)
  .then((n) => {
    console.log(`Шаг ${n}`);
    return delay(500, 2); // возвращаем следующий промис — .then() дождётся его
  })
  .then((n) => {
    console.log(`Шаг ${n}`);
    return delay(500, 3);
  })
  .then((n) => {
    console.log(`Шаг ${n}`);
    return delay(500, 4);
  })
  .then((n) => {
    console.log(`Шаг ${n}`);
    return delay(500, 5);
  })
  .then((n) => {
    console.log(`Шаг ${n}`);
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  })
  .finally(() => {
    console.log("Готово");
  });

delay(-100, "x")
  .then((n) => console.log("не должно выполниться:", n))
  .catch((error) => console.log("Ошибка (ожидаемо):", error.message));
