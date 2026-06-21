// ============================================================
// SemiCLI КАЛЬКУЛЯТОР — закрепление фаз 0-2
// Запуск: node calc.js
// Ввода с клавиатуры нет (async, Фаза 9) — аргументы передаём в функции.
// Используем: функции, switch, guard clause, try/catch, шаблонные строки.

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
  if (b === 0) throw new Error("Деление на ноль");
  return a / b;
};

const calc = (a, op, b) => {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return sub(a, b);
    case "*":
      return mul(a, b);
    case "/":
      return div(a, b);
    default:
      throw new Error("Неверная операция");
  }
};

try {
  console.log(calc(5, "/", 3));
} catch (e) {
  console.error(`Ошибка: ${e.name} - ${e.message}`);
}

try {
  console.log(calc(5, "/", 0));
} catch (e) {
  console.error(`Ошибка: ${e.name} - ${e.message}`);
}

try {
  console.log(calc(5, "?", 3));
} catch (e) {
  console.error(`Ошибка: ${e.name} - ${e.message}`);
}

const formatResult = (a, op, b) => {
  try {
    return `${a} ${op} ${b} = ${calc(a, op, b)}`;
  } catch (e) {
    return `${a} ${op} ${b} = ошибка: ${e.message}`;
  }
};

console.log(formatResult(10, "+", 5)); // 10 + 5 = 15
console.log(formatResult(5, "/", 0)); // 5 / 0 = ошибка: Деление на ноль
console.log(formatResult(5, "?", 1)); // 5 ? 1 = ошибка: Неверная операция
