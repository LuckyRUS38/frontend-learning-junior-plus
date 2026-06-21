# CSS Roadmap — от нуля до джуна (17 фаз)

> Источник: сгенерировано из интерактивного roadmap (HTML). Этот .md — основной формат для чтения по фазам и подтемам.

## Оглавление

- **Фаза 0: Как работает CSS** — Синтаксис, подключение, DevTools
- **Фаза 1: Селекторы** — Как выбрать нужный элемент
- **Фаза 2: Box Model** — Как браузер считает размер элемента
- **Фаза 3: Текст и типографика** — Шрифты, размеры, читаемость
- **Фаза 4: Цвет и фон** — Форматы цвета, background, градиенты
- **Фаза 5: Display и поток** — Block, inline, overflow
- **Фаза 6: Flexbox** — Одномерные гибкие раскладки
- **Фаза 7: CSS Grid** — Двумерные сетки — строки и колонки
- **Фаза 8: Позиционирование** — position, z-index, stacking context
- **Фаза 9: Единицы и Responsive** — px, rem, vw, media queries, clamp
- **Фаза 10: CSS Переменные** — Custom properties — переменные в CSS
- **Фаза 11: Псевдоклассы и псевдоэлементы** — :hover, :nth-child, ::before, ::after
- **Фаза 12: Transform** — Двигаем, вращаем, масштабируем
- **Фаза 13: Transitions** — Плавные переходы между состояниями
- **Фаза 14: Animations** — @keyframes — полный контроль
- **Фаза 15: Продвинутые концепции** — filter, clip-path, современный CSS
- **Фаза 16: Архитектура CSS** — BEM, SCSS, CSS в React

---

## Фаза 0: Как работает CSS

*Синтаксис, подключение, DevTools* · ⏱ 2-3 дня

### Синтаксис CSS
Правила, свойства, значения · день 1

- selector { property: value; } — базовая структура правила
- Одно объявление = одно свойство + одно значение
- Блок { } содержит любое количество объявлений
- Точка с запятой ; после каждого объявления обязательна
- Комментарии: /* этот текст браузер игнорирует */
- CSS нечувствителен к регистру — принято писать строчными
- Пробелы и переносы строк для браузера не важны

*Запрос ментору:* Объясни синтаксис CSS с 5 примерами правил — я только начинаю

### Подключение CSS к HTML
Три способа добавить стили · день 1

- Inline стиль — атрибут style прямо в теге: самый высокий приоритет
- Тег style внутри HTML — блок стилей прямо в документе
- Тег link в секции head — подключение внешнего .css файла
- Внешний файл — правильный способ для любого проекта
- Приоритет: inline стиль > тег style > внешний файл
- Принцип: HTML = структура, CSS = внешний вид
- Несколько файлов CSS — каждый подключается отдельным тегом link

*Запрос ментору:* Объясни три способа подключить CSS с плюсами и минусами

### DevTools браузера
Главный инструмент разработчика · день 2

- F12 или Ctrl+Shift+I — открыть DevTools
- Курсор-стрелка в DevTools — клик на элемент на странице
- Вкладка Elements — HTML слева, примнённые стили справа
- Вкладка Styles — все CSS правила для элемента
- Вкладка Computed — итоговые вычисленные значения
- Можно редактировать CSS прямо в DevTools — изменения временные
- Box Model схема внизу справа — видны margin, padding, content

*Запрос ментору:* Научи пользоваться DevTools для изучения CSS на практике

---

## Фаза 1: Селекторы

*Как выбрать нужный элемент* · ⏱ 5-7 дней

### Базовые селекторы
Тег, класс, id, универсальный · день 1

- p {} — по тегу: применится ко всем параграфам
- Точка .btn {} — по классу: атрибут class в HTML
- Решётка #hero {} — по id: атрибут id в HTML (один на страницу)
- Звёздочка * {} — универсальный: все элементы
- Один тег = много элементов; один id = ровно один элемент
- Классов у одного элемента может быть несколько через пробел
- Два класса вместе .card.featured — оба одновременно (слитно)

*Запрос ментору:* Объясни базовые CSS селекторы с задачками для новичка

### Комбинаторы
Выбор по отношениям между тегами · день 2-3

- Пробел: div p — потомок любой глубины вложенности
- Больше: div > p — только прямой дочерний элемент
- Плюс: h1 + p — соседний элемент сразу после h1
- Тильда: h1 ~ p — все братья после h1 в том же родителе
- nav a — ссылки внутри навигации (очень частый паттерн)
- Можно цеплять: ul > li > a — цепочка прямых детей
- Правило: не делать цепочки глубже 3 уровней

*Запрос ментору:* Объясни CSS комбинаторы с реальными HTML примерами

### Атрибутные селекторы
Выбор по HTML атрибутам · день 3

- [href] — любой элемент с атрибутом href
- [type=text] — элемент с точным значением атрибута
- [href^=https] — значение начинается с https
- [href$=.pdf] — значение заканчивается на .pdf
- [class*=btn] — значение содержит слово btn
- img[alt] — картинки у которых задан атрибут alt
- input[required] — обязательные поля формы

*Запрос ментору:* Покажи практические применения атрибутных селекторов

### Специфичность и каскад
Как браузер выбирает победителя · день 4-5

- Специфичность = три числа: id, class, tag
- id даёт вес 1,0,0 — самый сильный обычный селектор
- class, псевдокласс, атрибут — вес 0,1,0
- тег, псевдоэлемент — вес 0,0,1
- !important перебивает всё (антипаттерн, избегать)
- При одинаковой специфичности побеждает последний по порядку
- Каскад: стили браузера < твои стили < !important

*Запрос ментору:* Объясни специфичность CSS с задачками — угадай чей стиль победит

---

## Фаза 2: Box Model

*Как браузер считает размер элемента* · ⏱ 3-4 дня

### Что такое Box Model
Каждый элемент — прямоугольник · день 1

- Каждый HTML элемент = прямоугольник из четырёх слоёв
- Слои снаружи внутрь: margin, border, padding, content
- Content — само содержимое: текст, картинки
- Padding — внутренний отступ между контентом и рамкой
- Border — рамка вокруг padding
- Margin — внешний отступ от других элементов
- DevTools > Elements > Box Model — наглядная схема всех слоёв

*Запрос ментору:* Объясни box model с визуальным примером и упражнением

### Padding и Margin
Внутренние и внешние отступы · день 1-2

- padding: 16px — все четыре стороны одинаково
- padding: 8px 16px — верх/низ = 8, лево/право = 16
- padding: 5px 10px 15px 20px — top right bottom left по часовой
- margin: auto — центрирует блочный элемент горизонтально
- margin: 0 auto — нет верхнего отступа и по центру
- Margin collapsing: вертикальные margin соседей сливаются в один
- Отрицательный margin допустим и сдвигает элемент

*Запрос ментору:* Объясни padding vs margin с упражнениями — в чём разница

### Border и border-radius
Рамки и скруглённые углы · день 2

- border: 2px solid #333 — ширина, тип, цвет
- Типы рамки: solid, dashed, dotted, double, none
- border-top / right / bottom / left — только одна сторона
- border-radius: 8px — скруглить все углы
- border-radius: 50% — сделать круг при равных width и height
- border-radius: 20px 5px — разные углы
- outline — как border, но не влияет на размер и поток

*Запрос ментору:* Покажи примеры border и border-radius для кнопок и карточек

### box-sizing: border-box
Ставь в каждый проект — это стандарт · день 3

- По умолчанию (content-box): width — только контент
- width:200px + padding:20px = фактически 240px — сюрприз!
- border-box: width включает padding и border внутрь
- width:200px + padding:20px = фактически 200px — как ожидаешь
- Первая строка любого CSS: * { box-sizing: border-box; }
- Это стандарт — 100% реальных проектов используют border-box
- Рядом обычно: html { font-size: 16px } и body { margin: 0 }

*Запрос ментору:* Объясни разницу content-box vs border-box на числовом примере

---

## Фаза 3: Текст и типографика

*Шрифты, размеры, читаемость* · ⏱ 3-4 дня

### font-family и подключение
Выбор и загрузка шрифтов · день 1

- font-family: Arial, Helvetica, sans-serif — список резервных шрифтов
- Семейства: serif (с засечками), sans-serif (без), monospace (код)
- Google Fonts — скопируй тег link и правило font-family
- system-ui — использовать системный шрифт пользователя (быстро)
- @font-face — подключить свой файл шрифта
- Не подключай больше 2-3 шрифтов — замедляет загрузку
- Всегда указывай резервное семейство в конце: sans-serif

*Запрос ментору:* Как правильно подключить шрифт с Google Fonts?

### font-size, weight, style
Размер, жирность, наклон · день 1-2

- font-size: 16px — стандартный базовый размер
- rem — от корневого html: 1rem = 16px, 2rem = 32px
- em — от font-size текущего элемента (опасно при вложенности)
- font-weight: 400 = обычный, 700 = жирный, диапазон 100-900
- font-style: italic — курсив
- Правило: шрифты в rem, border/shadow в px
- font-variant: small-caps — маленькие заглавные буквы

*Запрос ментору:* Объясни разницу rem vs em vs px с практическими примерами

### line-height и интервалы
Читаемость и ритм текста · день 2

- line-height: 1.5 — без единиц = множитель от font-size
- Для основного текста: 1.5-1.7 — комфортное чтение
- line-height: 1 — строки вплотную (плохо для длинных текстов)
- letter-spacing: 0.05em — между буквами
- letter-spacing: 0.1em — хорошо для заголовков в uppercase
- word-spacing — расстояние между словами
- text-indent: 20px — отступ первой строки абзаца

*Запрос ментору:* Как настроить читаемую типографику с нуля?

### text-align, decoration, transform
Выравнивание и оформление · день 3

- text-align: left, center, right, justify
- text-decoration: underline, line-through, overline, none
- a { text-decoration: none } — убрать подчёркивание ссылок
- text-transform: uppercase, lowercase, capitalize
- Паттерн обрезки текста с многоточием — три свойства вместе:
- overflow: hidden + white-space: nowrap + text-overflow: ellipsis
- word-break: break-all — переносить где угодно

*Запрос ментору:* Покажи паттерн text-overflow ellipsis с полным кодом

---

## Фаза 4: Цвет и фон

*Форматы цвета, background, градиенты* · ⏱ 2-3 дня

### Форматы цвета
hex, rgb, hsl — всё о цвете · день 1

- Named: red, blue, coral, transparent — 140+ именованных
- Hex: #ff0000 = красный, #fff = белый (сокращение)
- rgb(255, 0, 0) — три канала 0-255
- rgba(255, 0, 0, 0.5) — с прозрачностью 0-1
- hsl(120, 100%, 50%) — оттенок 0-360, насыщенность, светлота
- hsla — hsl с прозрачностью
- currentColor — наследует значение свойства color

*Запрос ментору:* Объясни все форматы цвета CSS — когда что использовать

### Background свойства
Фон, изображение, позиция, размер · день 1-2

- background-color: #f5f5f5 — сплошной цвет фона
- background-image: url(photo.jpg) — фоновое изображение
- background-size: cover — заполнить весь блок (обрезает лишнее)
- background-size: contain — вписать целиком
- background-position: center, top right, 50% 50%
- background-repeat: no-repeat, repeat-x, repeat-y
- background-attachment: fixed — параллакс при скролле

*Запрос ментору:* Объясни все background свойства с примерами кода

### CSS градиенты
linear-gradient, radial-gradient · день 2

- linear-gradient(to right, #ff6b6b, #4ecdc4) — слева направо
- linear-gradient(45deg, red, blue) — под углом 45 градусов
- Несколько цветов: linear-gradient(red, yellow, green)
- Остановки: linear-gradient(red 30%, blue 70%)
- radial-gradient(circle, red, blue) — расходится от центра
- Применяется как фон: background: linear-gradient(...)
- С прозрачностью: от rgba(0,0,0,0) до rgba(0,0,0,0.8)

*Запрос ментору:* Покажи примеры красивых CSS градиентов которые реально используются

---

## Фаза 5: Display и поток

*Block, inline, overflow* · ⏱ 2-3 дня

### Normal flow
Как браузер расставляет элементы · день 1

- Block элементы: div, p, h1-h6, ul, li — каждый с новой строки
- Block занимает 100% ширины родителя по умолчанию
- Inline элементы: span, a, strong, em — идут как слова в тексте
- Inline нельзя задать width и height — они игнорируются
- Блоки складываются вертикально, inline — горизонтально
- Normal flow — поведение без CSS position и float
- Понимание flow объясняет почему элементы стоят там где стоят

*Запрос ментору:* Объясни normal flow — как браузер расставляет элементы без CSS

### display: типы отображения
block, inline, inline-block, none · день 1-2

- display: block — вся строка, width и height работают
- display: inline — в потоке текста, width и height не работают
- display: inline-block — в потоке, но width и height работают
- display: none — убрать из потока, места нет
- visibility: hidden — скрыть, но место сохраняется
- Кнопки делают inline-block чтобы задать padding
- a { display: block } — делает ссылку блочной

*Запрос ментору:* Объясни разницу block vs inline vs inline-block с примерами

### overflow
Контент который не помещается · день 2

- overflow: visible — контент вылезает за границы (по умолчанию)
- overflow: hidden — обрезать всё что вышло
- overflow: scroll — всегда показывать полосу прокрутки
- overflow: auto — полоса только если нужна
- overflow-x и overflow-y — по каждой оси отдельно
- overflow: hidden создаёт новый block formatting context
- Осторожно: overflow: hidden скрывает position:absolute дочерних

*Запрос ментору:* Покажи реальные случаи применения разных значений overflow

---

## Фаза 6: Flexbox

*Одномерные гибкие раскладки* · ⏱ 5-7 дней

### display: flex и направление
Основы контейнера · день 1

- display: flex на родителе — дети становятся flex-элементами
- Flexbox — для одномерных раскладок: строка ИЛИ колонка
- flex-direction: row — горизонтально (по умолчанию)
- flex-direction: column — вертикально
- flex-direction: row-reverse, column-reverse — обратный порядок
- Главная ось = направление flex-direction
- Поперечная ось = перпендикулярно главной

*Запрос ментору:* Тема: Flexbox с нуля — составь план изучения с упражнениями

### justify-content
Распределение по главной оси · день 2

- flex-start — прижать к началу (по умолчанию)
- flex-end — прижать к концу
- center — по центру главной оси
- space-between — равные промежутки между элементами
- space-around — равные промежутки вокруг каждого
- space-evenly — абсолютно равные промежутки везде
- Важно: главная ось меняется вместе с flex-direction

*Запрос ментору:* Объясни все значения justify-content с визуальными примерами

### align-items и align-self
Выравнивание по поперечной оси · день 2-3

- stretch — растянуть по поперечной оси (по умолчанию)
- flex-start — к началу поперечной оси
- flex-end — к концу
- center — по центру поперечной оси
- baseline — по базовой линии текста
- align-self — на дочернем, переопределяет align-items для него
- Трюк: justify-content:center + align-items:center = идеальный центр

*Запрос ментору:* Объясни разницу justify-content и align-items

### flex-wrap и gap
Перенос строк и отступы · день 3

- flex-wrap: nowrap — все в одну строку (по умолчанию)
- flex-wrap: wrap — переносить на следующую строку
- gap: 16px — расстояние между flex-элементами
- gap: 8px 16px — row-gap и column-gap раздельно
- align-content — выравнивание строк при flex-wrap
- Карточки + flex-wrap + gap = простая адаптивная сетка
- row-gap и column-gap можно задать отдельно

*Запрос ментору:* Покажи паттерн flex-wrap для адаптивной сетки карточек

### Свойства дочерних элементов
flex-grow, shrink, basis, order · день 4-5

- flex-grow: 1 — занять всё свободное место
- flex-grow: 2 — в два раза больше чем flex-grow:1 у соседа
- flex-shrink: 0 — не сжиматься когда места не хватает
- flex-basis: 200px — начальный размер до распределения
- flex: 1 — сокращение: grow 1, shrink 1, basis 0 (самое частое)
- flex: 0 0 auto — фиксированный размер, не расти и не сжиматься
- order: -1 — поставить первым без изменения HTML

*Запрос ментору:* Объясни flex-grow shrink basis простыми словами с примером кода

---

## Фаза 7: CSS Grid

*Двумерные сетки — строки и колонки* · ⏱ 5-7 дней

### Основы Grid
Колонки, строки, fr единица · день 1-2

- display: grid — включаем на родителе
- grid-template-columns: 200px 1fr 200px — три колонки
- fr — fractional unit: доля свободного пространства
- repeat(3, 1fr) — три равные колонки через сокращение
- grid-template-rows — аналогично для строк
- gap: 16px — расстояния между всеми ячейками
- Дети автоматически размещаются по ячейкам

*Запрос ментору:* Тема: CSS Grid с нуля — составь план изучения с упражнениями

### auto-fit, auto-fill, minmax
Адаптивная сетка без media queries · день 2-3

- minmax(200px, 1fr) — колонка от 200px до 1fr
- repeat(auto-fit, minmax(200px, 1fr)) — сколько влезет
- auto-fit: пустые треки схлопываются
- auto-fill: пустые треки сохраняются
- Это адаптивные карточки БЕЗ единого media query!
- minmax(0, 1fr) — предотвращает вылезание контента из ячейки
- Самый мощный паттерн Grid — учи в первую очередь

*Запрос ментору:* Объясни auto-fit vs auto-fill + minmax с примером адаптивных карточек

### Размещение элементов
grid-column, grid-row, span · день 3-4

- grid-column: 1 / 3 — занять от линии 1 до линии 3
- grid-column: span 2 — занять 2 колонки без указания линий
- grid-row: 1 / 3 — занять 2 строки
- grid-column: 1 / -1 — на всю ширину сетки
- Линии: 4 колонки = 5 линий: 1, 2, 3, 4, 5
- -1 означает последнюю линию
- grid-area: header — назначить элементу имя области

*Запрос ментору:* Объясни grid-column и grid-row с примером размещения элементов

### grid-template-areas
Визуальная карта раскладки · день 4-5

- Задаём карту строками в grid-template-areas
- Пример: header header header
- Второй ряд: sidebar main main
- Третий ряд: footer footer footer
- grid-area: header на элементе — назначает его в область
- Имя области = один прямоугольник, L-форму нельзя
- Точка . — пустая ячейка в сетке

*Запрос ментору:* Покажи полный пример grid-template-areas для страницы сайта

---

## Фаза 8: Позиционирование

*position, z-index, stacking context* · ⏱ 3-4 дня

### static и relative
Базовое и сдвинутое позиционирование · день 1

- static — по умолчанию у всех: top/left не работают
- relative — сдвигаем через top, left, right, bottom
- Сдвиг от своего исходного места в потоке
- Место в потоке сохраняется — дыра остаётся
- Главный смысл relative: создать контекст для absolute дочерних
- position: relative без top/left — только как контейнер
- Не создаёт stacking context если z-index: auto

*Запрос ментору:* Объясни position relative с практическим примером

### absolute и fixed
Элементы вырванные из потока · день 2

- absolute — от ближайшего positioned предка (не static)
- Если нет positioned предка — от корневого элемента страницы
- Вырван из потока: другие элементы его не замечают
- Паттерн: родитель position:relative + ребёнок position:absolute
- fixed — от viewport, не двигается при прокрутке
- fixed используют для: шапок, кнопок наверх, уведомлений
- fixed тоже вырван из потока

*Запрос ментору:* Объясни position absolute и fixed с примерами реальных UI компонентов

### sticky и z-index
Прилипающий элемент и порядок слоёв · день 3-4

- sticky — relative до порога, потом прилипает как fixed
- position: sticky; top: 0 — шапка прилипает при скролле
- Ограничен своим родителем — исчезает когда родитель уходит
- z-index работает только у positioned элементов (не static)
- Больше z-index = ближе к пользователю
- Stacking context: новый контекст при transform, opacity, filter
- Ребёнок не может выйти за пределы stacking context родителя

*Запрос ментору:* Объясни почему z-index иногда не работает — с примером

---

## Фаза 9: Единицы и Responsive

*px, rem, vw, media queries, clamp* · ⏱ 5-7 дней

### Единицы измерения
px, %, rem, em, vw, vh · день 1-2

- px — абсолютные пиксели, предсказуемы
- % — от родителя: width: 50% = половина ширины родителя
- rem — от html: 1rem = 16px, 2rem = 32px — всегда предсказуемо
- em — от font-size текущего элемента (опасно при вложенности)
- vw — процент ширины viewport: 100vw = вся ширина
- vh — процент высоты viewport: 100vh = весь экран
- svh/dvh — учитывают мобильный адресбар

*Запрос ментору:* Объясни все CSS единицы с примерами — когда что использовать

### Media queries
Стили для разных экранов · день 2-4

- @media (max-width: 768px) — при ширине до 768px
- @media (min-width: 1024px) — при ширине от 1024px
- Mobile-first: пишешь для мобильных, min-width расширяет
- Desktop-first: пишешь для широких, max-width сужает
- Брейкпоинты: 480, 768, 1024, 1440px
- @media (prefers-color-scheme: dark) — тёмная тема ОС
- @media (prefers-reduced-motion: reduce) — уважаем анимации

*Запрос ментору:* Объясни mobile-first подход с полным примером

### clamp, min, max, calc
Адаптивность без media queries · день 5

- clamp(min, preferred, max) — значение зажато между min и max
- font-size: clamp(16px, 2.5vw, 24px) — адаптивный шрифт
- min(500px, 100%) — не шире 500px и не шире родителя
- max(2rem, 5vw) — не меньше 2rem
- calc(100% - 40px) — смешивать разные единицы
- calc(var(--spacing) * 2) — с CSS переменными
- Вложение: calc(min(600px, 100%) - 2rem)

*Запрос ментору:* Покажи как clamp заменяет media queries для адаптивного текста

---

## Фаза 10: CSS Переменные

*Custom properties — переменные в CSS* · ⏱ 2-3 дня

### Объявление и использование
Синтаксис custom properties · день 1

- Объявление: --my-color: #ff6b6b (два дефиса обязательны)
- Использование: color: var(--my-color)
- Fallback: var(--my-color, red) — значение если переменная не задана
- В :root — доступна глобально по всему документу
- В .component — локальная только для этого компонента
- Регистрозависимы: --Color и --color — разные переменные
- Переменные наследуются как обычные CSS свойства

*Запрос ментору:* Объясни CSS переменные с примером системы токенов дизайна

### Тёмная тема через переменные
Переключение тем · день 2

- Задай в :root: --bg: white; --text: #111
- @media (prefers-color-scheme: dark) { :root { --bg: #1a1a1a } }
- Тёмная тема через класс: .dark { --bg: #1a1a1a }
- document.body.classList.toggle('dark') — переключение из JS
- Все компоненты обновятся автоматически — меняй в одном месте
- Компонентные переменные: .card { --card-bg: white }
- Дочернее переопределение — локально внутри компонента

*Запрос ментору:* Покажи полный пример тёмной темы через CSS переменные

### Переменные и JavaScript
Читать и изменять через JS · день 3

- Читать: getComputedStyle(el).getPropertyValue('--my-var').trim()
- Установить: el.style.setProperty('--my-var', '20px')
- Инлайн в HTML через атрибут style: --offset: 10px
- Анимация через JS: меняй переменную, CSS transition анимирует
- В calc(): width: calc(var(--cols) * 100px)
- В transform: transform: translateX(var(--slide))
- Паттерн: одна переменная из JS меняет много CSS эффектов

*Запрос ментору:* Покажи примеры управления CSS переменными через JavaScript

---

## Фаза 11: Псевдоклассы и псевдоэлементы

*:hover, :nth-child, ::before, ::after* · ⏱ 3-4 дня

### Псевдоклассы состояния
Реакция на пользователя · день 1

- :hover — курсор мыши над элементом
- :focus — элемент получил фокус (Tab или клик)
- :focus-visible — фокус только при навигации с клавиатуры
- :focus-within — фокус у любого потомка внутри
- :active — в момент нажатия мыши
- :visited — посещённая ссылка
- :disabled и :checked — состояния форм
- :hover + transition = базовая интерактивность

*Запрос ментору:* Покажи паттерны :hover и :focus для кнопок и полей ввода

### Структурные псевдоклассы
:nth-child, :not, :is, :has · день 2-3

- :first-child — первый дочерний элемент
- :last-child — последний дочерний
- :nth-child(3) — конкретно третий по счёту
- :nth-child(odd) — нечётные; :nth-child(even) — чётные
- :nth-child(3n+1) — формула: 1-й, 4-й, 7-й...
- :not(.active) — все кроме .active
- :is(h1, h2, h3) — группировка селекторов
- :has(img) — родитель содержащий img (CSS 2024)

*Запрос ментору:* Объясни :nth-child с примерами формул и реальными задачами

### ::before и ::after
Создаём элементы без лишнего HTML · день 3-4

- ::before — псевдоэлемент перед контентом тега
- ::after — псевдоэлемент после контента тега
- content: '' — обязателен; без него псевдоэлемент не появится
- content: 'текст' — вставить текстовое содержимое
- display: block — чтобы задать размеры псевдоэлементу
- Сочетание с position:absolute — декоративные эффекты
- counter-increment + content: counter() — счётчики

*Запрос ментору:* Покажи 5 реальных примеров использования ::before и ::after

---

## Фаза 12: Transform

*Двигаем, вращаем, масштабируем* · ⏱ 2-3 дня

### 2D трансформации
translate, scale, rotate, skew · день 1

- transform: translate(50px, 20px) — сдвиг по X и Y
- translateX(50px), translateY(20px) — по одной оси
- translate(50%) — 50% от размера самого элемента
- transform: scale(1.5) — увеличить в 1.5 раза
- transform: rotate(45deg) — поворот на 45 градусов
- transform: skew(20deg) — наклон
- Transform не влияет на поток — место в документе сохраняется

*Запрос ментору:* Объясни все 2D transform функции с визуальными примерами

### transform-origin и GPU
Точка трансформации и производительность · день 2

- transform-origin: center center — по умолчанию
- transform-origin: top left — вращать от левого верхнего угла
- transform-origin: 50% 0 — от верхнего центра
- Несколько трансформаций: transform: translate() rotate() scale()
- Порядок важен — rotate потом translate не равно translate потом rotate
- GPU-дешёвые свойства: transform и opacity — не вызывают reflow
- GPU-дорогие: width, height, top, left — избегай для анимации

*Запрос ментору:* Объясни transform-origin с примерами и GPU ускорение

### 3D трансформации
perspective, rotateX, rotateY · день 3

- perspective: 1000px на родителе — создаёт 3D пространство
- Меньше значение = более выраженный 3D эффект
- rotateX(45deg) — вращение вокруг горизонтальной оси
- rotateY(45deg) — вращение вокруг вертикальной оси
- translateZ(100px) — сдвиг по оси Z (к зрителю)
- transform-style: preserve-3d — включить 3D для дочерних
- backface-visibility: hidden — скрыть обратную сторону

*Запрос ментору:* Покажи как сделать 3D переворот карточки при hover

---

## Фаза 13: Transitions

*Плавные переходы между состояниями* · ⏱ 2 дня

### Синтаксис transition
Анимируем изменения свойств · день 1

- transition: property duration timing-function delay
- transition: color 0.3s ease — плавная смена цвета
- transition: all 0.3s — все свойства (аккуратно, медленнее)
- Несколько: transition: color 0.3s, transform 0.2s ease-out
- Transition срабатывает при изменении: hover, class, focus
- Работает в обратную сторону автоматически
- transition-delay: 0.1s — задержка перед стартом

*Запрос ментору:* Объясни синтаксис transition с примерами hover эффектов

### Timing functions
Кривые плавности и оптимизация · день 2

- ease — медленно-быстро-медленно (по умолчанию)
- linear — постоянная скорость (для спиннеров)
- ease-in — медленный старт (хорошо для ухода элемента)
- ease-out — медленный финал (хорошо для появления)
- ease-in-out — оба конца медленные
- cubic-bezier(x1,y1,x2,y2) — кастомная кривая
- Анимируй только transform и opacity — дёшево для GPU

*Запрос ментору:* Объясни timing functions с примером когда что выбирать

---

## Фаза 14: Animations

*@keyframes — полный контроль* · ⏱ 3-4 дня

### @keyframes
Описываем шаги анимации · день 1

- @keyframes myAnim { from { opacity:0 } to { opacity:1 } }
- from = 0%, to = 100%
- С процентами: 0% {} 25% {} 50% {} 100% {}
- Несколько свойств в одном шаге: opacity + transform вместе
- Шагов может быть сколько угодно — только нужные
- Имя keyframes — твой выбор — применяется через animation-name
- Keyframes можно переиспользовать для разных элементов

*Запрос ментору:* Объясни @keyframes с 4 разными примерами анимаций

### Animation свойства
Управляем воспроизведением · день 2

- animation-name: myAnim — ссылка на @keyframes
- animation-duration: 1s — длительность одного цикла
- animation-timing-function: ease, linear, ease-out
- animation-delay: 0.5s — пауза перед стартом
- animation-iteration-count: 3 или infinite
- animation-direction: normal, reverse, alternate (туда-обратно)
- animation-fill-mode: forwards — остаться в конечном состоянии
- animation-play-state: paused — пауза

*Запрос ментору:* Объясни все animation свойства с примерами

### Базовые паттерны
5 анимаций которые везде используются · день 3

- Fade in: opacity от 0 до 1
- Slide in: translateY(-20px) + opacity:0 до начального состояния
- Spin: rotate от 0 до 360deg + iteration-count: infinite
- Pulse: scale от 1 до 1.05 и обратно
- Shake: translateX -5px, 5px, -5px через проценты
- Shorthand: animation: fadeIn 0.4s ease-out forwards
- @media (prefers-reduced-motion: reduce) — отключать анимации

*Запрос ментору:* Покажи код fadeIn, slideIn, spin и pulse анимаций

---

## Фаза 15: Продвинутые концепции

*filter, clip-path, современный CSS* · ⏱ 1-2 недели

### CSS функции
calc, min, max, clamp · 2-3 дня

- calc(100% - 40px) — смешивать разные единицы
- calc(var(--spacing) * 2) — с CSS переменными
- min(500px, 100%) — меньшее из двух значений
- max(2rem, 5vw) — большее из двух
- clamp(min, preferred, max) — зажато между пределами
- Вложение: calc(min(600px, 100%) - 2rem)
- Применения: адаптивный шрифт, умная ширина, fluid spacing

*Запрос ментору:* Объясни calc, min, max, clamp с практическими примерами кода

### Визуальные эффекты
filter, backdrop-filter, clip-path · 2-3 дня

- filter: blur(4px) — размытие элемента
- filter: brightness(1.5), grayscale(1) — яркость, ч/б
- filter: drop-shadow() — тень учитывает прозрачность PNG
- backdrop-filter: blur(10px) — размытие позади элемента
- clip-path: polygon(...) — обрезать по форме
- clip-path: circle(50%) — круговая обрезка
- mix-blend-mode: multiply, screen — как слои в Photoshop

*Запрос ментору:* Покажи как сделать эффект матового стекла через backdrop-filter

### Современный CSS
Что знает джун в 2025 · 3-4 дня

- aspect-ratio: 16/9 — соотношение сторон
- object-fit: cover, contain — для картинок как background-size
- scroll-behavior: smooth — плавная прокрутка к якорям
- scroll-snap — прыжки к точкам при скролле
- @container — стили по размеру родителя (Container Queries)
- pointer-events: none — клики проходят сквозь элемент
- color-mix(in srgb, red 50%, blue) — смешивание цветов

*Запрос ментору:* Расскажи о Container Queries и чем они лучше media queries

---

## Фаза 16: Архитектура CSS

*BEM, SCSS, CSS в React* · ⏱ 5-7 дней

### BEM методология
Именование классов без конфликтов · день 1-2

- Block: .card, .button, .nav — самостоятельный компонент
- Element: .card__title — часть блока (два подчёркивания)
- Modifier: .button--primary — вариант (два дефиса)
- В CSS нет вложенности: .card__title {} не .card .title {}
- Плюс: сразу видно что к чему относится в HTML
- Минус: длинные имена классов, много классов в HTML
- Основа для понимания любых CSS методологий

*Запрос ментору:* Объясни BEM с полным примером реального UI компонента

### SCSS / Sass
CSS с суперспособностями · день 2-4

- SCSS компилируется в обычный CSS — браузер разницы не знает
- Вложенность: .nav { a { color: red } } = .nav a { color: red }
- Амперсанд &: &:hover = .button:hover — parent selector
- @mixin button($color) {} + @include button(blue) — переиспользование
- @extend .base — наследовать стили другого класса
- Файлы: _variables.scss, _buttons.scss + @use для объединения
- Vite поддерживает SCSS из коробки: npm install -D sass

*Запрос ментору:* Покажи как организовать SCSS проект с переменными и миксинами

### CSS в React
Modules, Tailwind, styled-components · день 4-5

- Глобальный CSS: import './styles.css' — просто работает
- CSS Modules: import styles from './Card.module.css'
- className={styles.card} — классы локальны, не конфликтуют
- Tailwind CSS: утилитарные классы прямо в JSX
- flex items-center gap-4 p-4 rounded-xl bg-white
- Tailwind: не пишешь CSS вообще — только классы
- Styled-components: CSS прямо в JS как template literal

*Запрос ментору:* Сравни CSS Modules vs Tailwind для React — плюсы и минусы

---

