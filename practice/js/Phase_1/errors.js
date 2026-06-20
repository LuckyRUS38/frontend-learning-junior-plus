const badJSON = "{ не json }";

try {
  const data = JSON.parse(badJSON);
  console.log(data);
} catch (e) {
  console.error(e.name, e.message);
} finally {
  console.log("Обработка завершена");
}

const noBadJSON = '{"a":1}';
try {
  const data = JSON.parse(noBadJSON);
  console.log(data);
} catch (e) {
  console.error(e.name, e.message);
} finally {
  console.log("Обработка завершена");
}

let n = -5;
try {
  if (n < 0) {
    throw new Error("Число отрицательное");
  }
} catch (e) {
  console.error(e.name, e.message);
}

console.log("Конец");
