const transactions = [
  { title: "Зарплата", amount: 50000, category: "доход" },
  { title: "Продукты", amount: -3200, category: "еда" },
  { title: "Кафе", amount: -1500, category: "еда" },
  { title: "Такси", amount: -800, category: "транспорт" },
  { title: "Фриланс", amount: 12000, category: "доход" },
  { title: "Бензин", amount: -2500, category: "транспорт" },
];

const balance = transactions.reduce(
  (acc, transaction) => acc + transaction.amount,
  0,
);

const totalIncomes = transactions
  .filter((transaction) => transaction.amount >= 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);
const totalExpenses = transactions
  .filter((transaction) => transaction.amount < 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);

const maxExpense = transactions.reduce((min, t) => {
  if (t.amount < min.amount) return t;
  else return min;
});
console.log(`Название: ${maxExpense.title}. Сумма: ${maxExpense.amount}`);

const totalsByCategory = transactions.reduce((acc, t) => {
  if (acc[t.category] === undefined) acc[t.category] = 0;
  acc[t.category] += t.amount;
  return acc;
}, {});
console.log(totalsByCategory);

const buildReport = () => {
  let res = "";
  res += `Баланс: ${balance}. Доходы: ${totalIncomes}. Расходы: ${totalExpenses}\n`;
  for (const cat in totalsByCategory) {
    res += `Категория: ${cat}. Сумма: ${totalsByCategory[cat]}\n`;
  }
  return res;
};

console.log(buildReport());
