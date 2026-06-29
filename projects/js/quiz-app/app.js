// ============================================================
// QUIZ APP — UI-версия (фазы 0-7)
// Запуск: Live Server или `npx serve`, консоль браузера F12.
// Данные готовы. Логику пишешь ты, по шагам — я ревьюю каждый.
// ============================================================

// Вопросы: массив объектов { question, options, correct }
// correct — ИНДЕКС правильного варианта в options (0..3)
const QUESTIONS = [
  {
    question: "Какой оператор строгого равенства в JS?",
    options: ["==", "===", "=", "!="],
    correct: 1,
  },
  {
    question: "Что вернёт typeof null?",
    options: ["null", "undefined", "object", "number"],
    correct: 2,
  },
  {
    question:
      "Какой метод создаёт НОВЫЙ массив из трансформированных элементов?",
    options: ["forEach", "filter", "map", "reduce"],
    correct: 2,
  },
  {
    question: "Чему равно Boolean('0')?",
    options: ["false", "true", "0", "NaN"],
    correct: 1,
  },
  {
    question: "Что делает e.preventDefault()?",
    options: [
      "Останавливает всплытие",
      "Отменяет действие браузера",
      "Удаляет элемент",
      "Создаёт событие",
    ],
    correct: 1,
  },
];

// Точка входа — контейнер, куда рисуем
const app = document.getElementById("app");

// Состояние квиза — единственный источник правды
let isAnswered = false;
let currentIndex = 0;
let score = 0;

// ============================================================
// ШАГ 1 (твой): функция showQuestion(index)
//   - берёт вопрос QUESTIONS[index]
//   - рисует в #app: текст вопроса + кнопки-варианты (класс "option")
//   - каждой кнопке поставь data-index с её номером (для шага 2)
//   - пока БЕЗ проверки ответа, без таймера — только отрисовка
//   - в конце вызови showQuestion(0), открой страницу — увидишь первый вопрос
//
// Пиши ниже. Готово — зови на ревью.
// ============================================================

const showQuestion = (index) => {
  app.innerHTML = "";

  const progress = document.createElement("p");
  progress.textContent = `Вопрос ${index + 1} / ${quizQuestions.length}`;
  app.appendChild(progress);

  const question = quizQuestions[index];
  const questionText = document.createElement("p");
  questionText.textContent = question.question;
  app.appendChild(questionText);
  const buttons = document.createDocumentFragment();
  for (let i = 0; i < question.options.length; i++) {
    const button = document.createElement("button");
    button.className = "option";
    button.dataset.index = i;
    button.textContent = question.options[i];
    buttons.append(button);
  }
  app.appendChild(buttons);

  const next = document.createElement("button");
  next.className = "next hidden btn"; // hidden — пока не видно
  next.textContent = "Далее";
  app.appendChild(next);
};

let quizQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5);
showQuestion(currentIndex);

// ====== //
// EVENTS //
// ====== //
const resetQuiz = () => {
  currentIndex = 0;
  score = 0;
  isAnswered = false;
  quizQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5);
};

const handleAnswer = (button) => {
  if (isAnswered === true) return;
  if (quizQuestions[currentIndex].correct === Number(button.dataset.index)) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    const correctButton = app.querySelector(
      `[data-index="${quizQuestions[currentIndex].correct}"]`,
    );
    correctButton.classList.add("correct");
  }
  isAnswered = true;
  app.querySelector(".next").classList.remove("hidden");
};

const handleRetry = () => {
  resetQuiz();
  showQuestion(currentIndex);
};

const handleNext = () => {
  currentIndex++;
  isAnswered = false;
  if (currentIndex < quizQuestions.length) {
    showQuestion(currentIndex);
  } else {
    showResults();
  }
  return; // важно: вышли, дальше не идём
};

app.addEventListener("click", (e) => {
  if (e.target.closest(".next")) return handleNext();
  if (e.target.closest(".restart")) return handleRetry();

  const button = e.target.closest(".option");
  if (button) {
    handleAnswer(button);
    return;
  }
});

const showResults = () => {
  app.innerHTML =
    "<h2>Готово!</h2><p>Счёт " + score + " / " + quizQuestions.length + "</p>";
  const buttonRetry = document.createElement("button");
  buttonRetry.textContent = "Заново";
  buttonRetry.classList.add("btn", "restart");
  app.appendChild(buttonRetry);
};
