# React Roadmap

> Источник: сгенерировано из интерактивного roadmap (HTML). Этот .md — основной формат для чтения по фазам и подтемам.

## Оглавление

- **Фаза 0: JS для React** — Базовый синтаксис JavaScript — нужно знать до старта
- **Фаза 1: Введение в React** — Что такое React и как запустить первый проект
- **Фаза 2: Props** — Передача данных сверху вниз по дереву
- **Фаза 3: useState** — Реактивное состояние компонента
- **Фаза 4: События и формы** — Обработчики, submit, preventDefault
- **Фаза 5: useEffect** — Побочные эффекты и синхронизация
- **Фаза 6: Списки и условный рендеринг** — map, key, тернарный оператор
- **Фаза 7: useRef и useContext** — DOM ссылки и глобальные данные
- **Фаза 8: Продвинутые хуки** — useMemo, useCallback, useReducer, кастомные
- **Фаза 9: Архитектура компонентов** — Структура проекта и паттерны
- **Фаза 10: React Router v6** — Навигация и маршрутизация
- **Фаза 11: Запросы к API** — fetch, axios, TanStack Query
- **Фаза 12: TypeScript в React** — Props, хуки, события, утилитарные типы
- **Фаза 13: Тестирование** — Vitest, React Testing Library
- **Фаза 14: Производительность** — Profiler, memo, lazy, code splitting
- **Фаза 15: Стейт-менеджеры** — Zustand, Redux Toolkit

---

## Фаза 0: JS для React

*Базовый синтаксис JavaScript — нужно знать до старта* · ⏱ 1-2 нед

### Стрелочные функции и деструктуризация
Синтаксис который в React везде · день 1-2

- Стрелочная функция: const add = (a, b) => a + b
- Неявный return: const double = x => x * 2
- Деструктуризация объекта: const { name, age } = user
- Деструктуризация массива: const [first, second] = arr
- Дефолтное значение: const { name = "Гость" } = user
- Переименование: const { name: userName } = user
- Вложенная деструктуризация: const { address: { city } } = user

*Запрос ментору:* Объясни стрелочные функции и деструктуризацию — нужно для React

### Spread, rest, методы массивов
Иммутабельные трансформации данных · день 2-3

- Spread объекта: const newObj = { ...obj, key: value }
- Spread массива: const newArr = [...arr, newItem]
- Rest параметры: const sum = (...nums) => nums.reduce((a,b)=>a+b,0)
- map — создать новый массив трансформируя каждый элемент
- filter — создать новый массив оставив только нужные элементы
- reduce — свернуть массив в одно значение
- find, findIndex, some, every, includes — поиск и проверка

*Запрос ментору:* Объясни map, filter, reduce, spread с примерами для React разработчика

### Модули, async/await, опциональная цепочка
ES6+ который нужен каждый день · день 3-4

- export default — один главный экспорт из файла
- Именованный экспорт: export const fn = ...
- import Component from "./Component" — default импорт
- import { helper } from "./utils" — именованный импорт
- async/await — читаемый синтаксис для промисов
- try/catch/finally — обработка ошибок в async функциях
- Опциональная цепочка: user?.address?.city — безопасный доступ
- Нулевое слияние: value ?? "default" — fallback для null/undefined

*Запрос ментору:* Объясни async/await, модули ES6 и опциональную цепочку — нужно для React

---

## Фаза 1: Введение в React

*Что такое React и как запустить первый проект* · ⏱ 2-3 дня

### Зачем React и как работает
Virtual DOM, reconciliation, Vite · день 1

- React — библиотека для создания UI, не полноценный фреймворк
- Компонентный подход: UI = дерево независимых компонентов
- Virtual DOM — JS-представление DOM в памяти
- Reconciliation: сравнение старого и нового Virtual DOM
- Только изменившиеся узлы обновляются в настоящем DOM
- npm create vite@latest — создать проект React + Vite
- Структура: src/App.jsx корневой, main.jsx точка входа
- React DevTools — расширение браузера для отладки

*Запрос ментору:* Объясни как работает React — Virtual DOM и reconciliation для новичка

### JSX синтаксис
JavaScript с HTML-подобной разметкой · день 1-2

- JSX компилируется в React.createElement() — это обычный JS
- className вместо class, htmlFor вместо for
- Самозакрывающиеся теги обязательны: img, input, br
- Выражения JS в фигурных скобках { }
- Атрибуты в camelCase: onClick, tabIndex, strokeWidth
- Одна корневая нода или Fragment как пустой тег-обёртка
- Комментарии в JSX: {/* комментарий */}
- JSX — это JS, поэтому if через тернарный, циклы через map

*Запрос ментору:* Объясни JSX — чем отличается от HTML и как работает

### Функциональные компоненты
Функция с заглавной буквы → JSX · день 2

- Компонент — функция возвращающая JSX, имя с заглавной буквы
- Файл: Button.jsx, экспорт: export default Button
- Вложенность: компоненты вкладываются образуя дерево
- React рендерит дерево компонентов в реальный DOM
- Чистая функция: те же props → тот же результат
- Нельзя читать/писать DOM напрямую — для этого хуки
- React.StrictMode: двойной рендер в dev для поиска ошибок
- Именование: компонент — существительное, хук — useГлагол

*Запрос ментору:* Объясни функциональные компоненты React с практическими примерами

---

## Фаза 2: Props

*Передача данных сверху вниз по дереву* · ⏱ 2-3 дня

### Props — основы
Объект данных передаваемый в компонент · день 1

- Props — объект с данными который передаётся в компонент при вызове
- Строка: name="Иван", число: age={25}, булево: active={true}
- Получение через деструктуризацию: function Card({ name, age })
- Props — read only, мутировать нельзя
- Любой тип: строки, числа, объекты, массивы, функции, JSX
- Дефолт: function Card({ name = "Гость" }) — значение по умолчанию
- Spread props: передать все пропсы дочернему через {...props}

*Запрос ментору:* Объясни props в React с примерами передачи разных типов данных

### children и composition
Вложенное содержимое и гибкие обёртки · день 1-2

- children — JSX между открывающим и закрывающим тегами компонента
- Передаётся автоматически без явного указания пропа
- Card с children — универсальная обёртка для любого содержимого
- Composition > inheritance — в React не используют наследование
- Именованные слоты: header={<H1/>} footer={<Footer/>}
- Layout компонент: принимает children, оборачивает общей структурой
- React.Children — утилиты для работы с children в сложных случаях

*Запрос ментору:* Объясни props.children и паттерн composition в React

### Prop drilling
Проблема и когда искать альтернативы · день 2

- Данные текут только вниз через props — однонаправленный поток
- Для передачи данных вверх — передавай callback как проп
- Prop drilling: передача пропсов через 3+ промежуточных уровней
- Промежуточные компоненты получают то, что им не нужно
- Сигнал к рефакторингу, не обязательно антипаттерн
- Решения: useContext, Zustand, Redux (изучим в фазах 7 и 15)
- Composition может устранить drilling без дополнительных инструментов

*Запрос ментору:* Объясни проблему prop drilling и как её решать

---

## Фаза 3: useState

*Реактивное состояние компонента* · ⏱ 3-4 дня

### useState — основы
Хук для хранения изменяемого состояния · день 1

- const [value, setValue] = useState(initialValue)
- Вызов setValue перезапускает рендер компонента
- Стейт локален: у каждого экземпляра компонента свой стейт
- Нельзя мутировать напрямую: arr.push() не вызовет ререндер
- Только через setter: setValue(newValue)
- Хуки только на верхнем уровне — не внутри if, for, вложенных функций
- Lazy init: useState(() => computeExpensive()) — выполнится один раз

*Запрос ментору:* Объясни useState с примерами — счётчик, переключатель, строка

### Иммутабельность стейта
Правильное обновление объектов и массивов · день 2

- Иммутабельность: не мутируй стейт — создавай новое значение
- Обновить объект: setUser({ ...user, name: "Новое имя" })
- Добавить в массив: setItems([...items, newItem])
- Удалить из массива: setItems(items.filter(i => i.id !== id))
- Обновить элемент: setItems(items.map(i => i.id===id ? {...i,done:true} : i))
- React сравнивает по ссылке: мутация объекта не вызовет ререндер
- Functional update: setValue(prev => prev + 1) — когда нужно предыдущее

*Запрос ментору:* Объясни иммутабельность стейта с примерами объектов и массивов

### Управляемые компоненты
Формы через стейт · день 3

- Controlled input: value={stateValue} onChange={handler}
- Инпут всегда показывает значение из стейта — единственный источник правды
- onChange: e => setValue(e.target.value)
- Чекбокс: checked={bool} onChange={e => setBool(e.target.checked)}
- Select: value={selected} onChange через стейт аналогично
- Uncontrolled: useRef к DOM напрямую (нужен реже)
- Сброс формы: setValues(initialState) после успешного submit

*Запрос ментору:* Объясни controlled vs uncontrolled компоненты с примером формы

---

## Фаза 4: События и формы

*Обработчики, submit, preventDefault* · ⏱ 2 дня

### Обработчики событий
Синтетические события React · день 1

- Синтетические события: одинаковы во всех браузерах
- onClick={handleClick} — без скобок, передаём функцию
- onClick={handleClick()} — вызов при рендере! Ошибка
- С аргументом: onClick={() => handleClick(id)}
- e.preventDefault() — отменить стандартное поведение
- e.stopPropagation() — остановить всплытие события
- onMouseEnter, onFocus, onBlur, onKeyDown, onSubmit

*Запрос ментору:* Объясни обработчики событий в React — частые ошибки и паттерны

### Формы в React
Полная форма с валидацией · день 1-2

- onSubmit на теге form — не на кнопке submit
- e.preventDefault() в handleSubmit — обязательно
- Валидация: проверяем стейт, ошибки записываем в стейт
- Показывай ошибки после попытки submit или onBlur поля
- react-hook-form — меньше кода, лучше производительность
- Zod/Yup — схемы валидации, интегрируются с react-hook-form
- Сброс: setValues(initialState) после успешного ответа сервера

*Запрос ментору:* Покажи пример полной формы React с валидацией и submit

---

## Фаза 5: useEffect

*Побочные эффекты и синхронизация* · ⏱ 3-4 дня

### useEffect — основы
Побочные эффекты после рендера · день 1

- Side effects: API запросы, подписки, изменение document.title
- Запускается после рендера и коммита в DOM
- useEffect(() => { ... }, [deps])
- Пустой массив [] — один раз после первого рендера
- [dep] — после монтирования и при каждом изменении dep
- Без массива — после каждого рендера (очень редко нужно)
- Не смешивай несвязанные эффекты — один эффект, одна задача

*Запрос ментору:* Объясни useEffect с примерами — три варианта зависимостей

### Зависимости и cleanup
Правила и очистка эффектов · день 2

- Все значения из scope используемые внутри — в массив зависимостей
- eslint-plugin-react-hooks напомнит о пропущенных зависимостях
- Cleanup: return () => { unsubscribe() } — очистка
- Cleanup при размонтировании и перед следующим запуском эффекта
- Бесконечный цикл: объект/массив пересоздаётся каждый рендер
- Решение: вынести объект за компонент или useMemo
- AbortController в cleanup — отмена fetch запроса

*Запрос ментору:* Объясни cleanup useEffect и распространённые ошибки с зависимостями

### Паттерн data/loading/error
Запросы к API из эффекта · день 3

- Три стейта: data, isLoading, error
- isLoading: true до запроса, false в finally
- try/catch ловит ошибку, записываем в error стейт
- AbortController: const ctrl = new AbortController()
- ctrl.abort() в cleanup функции
- Флаг отмены: let cancelled = false; if(!cancelled) setData(res)
- Лучше TanStack Query для реальных проектов — useEffect для учёбы

*Запрос ментору:* Покажи паттерн запроса к API в useEffect с loading, error, data

---

## Фаза 6: Списки и условный рендеринг

*map, key, тернарный оператор* · ⏱ 2 дня

### Рендеринг списков
array.map() и обязательный key · день 1

- array.map() возвращает массив JSX — React его рендерит
- Каждый элемент списка обязан иметь уникальный проп key
- key помогает React понять что изменилось, добавилось, удалилось
- Лучший key — уникальный id из данных (из БД)
- Index как key — только если список никогда не меняется
- Без key: предупреждение и баги с state/анимациями/фокусом
- null, undefined, false в массиве — React их не рендерит

*Запрос ментору:* Объясни рендеринг списков — зачем key и какие ошибки бывают

### Условный рендеринг
Все паттерны для показа и скрытия UI · день 1-2

- Тернарный оператор: condition ? ElementA : ElementB
- Логическое И: condition && Element — рендерить только если true
- Осторожно: 0 && Element рендерит 0 в DOM!
- Безопаснее: !!count && Element или count > 0 && Element
- null, undefined, false — не рендерятся, удобно для скрытия
- Early return: if(!data) return <Skeleton /> — до основного JSX
- Enum паттерн: const views = {loading:<L/>, error:<E/>, data:<D/>}[state]

*Запрос ментору:* Объясни все способы условного рендеринга в React с примерами

---

## Фаза 7: useRef и useContext

*DOM ссылки и глобальные данные* · ⏱ 3 дня

### useRef
Ссылки и mutable значения без ререндера · день 1

- useRef возвращает { current: value } — мутабельный контейнер
- Изменение ref.current не вызывает ререндер — отличие от useState
- DOM ссылка: ref={myRef} на JSX → myRef.current === DOM узел
- Применения: программный фокус, скролл, сторонние библиотеки
- Предыдущее значение: prevRef.current = currentValue в эффекте
- Таймеры: timerRef.current = setTimeout(...) → clearTimeout в cleanup
- forwardRef — передать ref из родителя в дочерний компонент

*Запрос ментору:* Объясни useRef — чем отличается от useState и когда использовать

### useContext
Глобальные данные без prop drilling · день 2-3

- Проблема: нужны данные на разных уровнях дерева без prop drilling
- createContext(defaultValue) — создать контекст
- Provider value={data} — обернуть поддерево, данные для всех потомков
- useContext(MyContext) — получить данные в любом компоненте-потомке
- Изменение value → все потребители перерендерятся
- Разделяй контексты: ThemeContext, AuthContext, LanguageContext
- Не для часто обновляемых данных — для этого Zustand/Redux

*Запрос ментору:* Объясни useContext с примером темы или авторизации

---

## Фаза 8: Продвинутые хуки

*useMemo, useCallback, useReducer, кастомные* · ⏱ 4 дня

### useMemo и useCallback
Мемоизация значений и функций · день 1-2

- Мемоизация — кешировать результат чтобы не вычислять повторно
- useMemo(() => heavyCalc(a,b), [a,b]) — кешировать значение
- useCallback(() => fn(a), [a]) — кешировать функцию
- Без useCallback функция пересоздаётся каждый рендер — новая ссылка
- React.memo(Comp) — не ренд если props не изменились (shallow compare)
- Связка React.memo + useCallback — для оптимизации дочерних
- Не злоупотребляй: примитивные вычисления не нужно мемоизировать

*Запрос ментору:* Объясни useMemo и useCallback — когда реально нужны

### useReducer
Сложное состояние через редьюсер · день 2-3

- Для сложного стейта с взаимосвязанными обновлениями
- const [state, dispatch] = useReducer(reducer, initialState)
- reducer — чистая функция: (state, action) => newState
- dispatch({ type: "ADD", payload: item }) — отправить действие
- switch по action.type — обработчики каждого случая
- Вся логика обновления в одном месте — легче тестировать
- Когда выбрать: 3+ взаимосвязанных стейта или сложные переходы

*Запрос ментору:* Объясни useReducer с примером корзины или многошаговой формы

### Кастомные хуки
Переиспользование stateful логики · день 3-4

- Функция начинающаяся с use — кастомный хук
- Извлекает логику для переиспользования между компонентами
- Каждый вызов — изолированная копия стейта
- useFetch(url) — возвращает { data, isLoading, error }
- useLocalStorage(key, init) — стейт синхронизированный с localStorage
- useDebounce(value, delay) — задержка для поиска
- useWindowSize() — текущий размер окна с обновлением

*Запрос ментору:* Объясни кастомные хуки — создай useFetch с нуля

---

## Фаза 9: Архитектура компонентов

*Структура проекта и паттерны* · ⏱ 3 дня

### Структура проекта
Как организовывать файлы и папки · день 1

- Feature-based: папка на фичу содержит всё для неё
- Flat для мелких проектов: components/, pages/, hooks/, utils/, types/
- Barrel файлы: index.js в папке для удобного импорта
- Абсолютные пути: настройка через resolve.alias в vite.config
- Колокация: тесты и стили рядом с компонентом
- Не создавай сложную структуру заранее — рефакторь по мере роста
- Один компонент = один файл, имя файла = имя компонента

*Запрос ментору:* Покажи хорошую структуру папок для React проекта среднего размера

### Когда разбивать компонент
Принципы декомпозиции · день 1-2

- Компонент делает слишком много — признак к разделению
- Более 100-150 строк — задумайся о дроблении
- Повторяющийся UI в нескольких местах — кандидат на компонент
- Presentational: только props → JSX, никакой бизнес-логики
- Container: управляет стейтом, получает данные, передаёт в presentational
- Не дроби слишком мелко — мелкие абстракции сложнее читать
- Инстинкт приходит с практикой кодревью и рефакторинга

*Запрос ментору:* Объясни принципы разбиения компонентов — presentational vs container

### Паттерны компонентов
Compound, render props, controlled · день 2-3

- Compound components: Select + Option через контекст
- Render props: передаём (data) => JSX как проп
- HOC устарел — заменяется кастомными хуками в большинстве случаев
- Controlled pattern: value + onChange снаружи — компонент без своего стейта
- Uncontrolled: компонент сам управляет стейтом
- Headless components: только логика, UI на откуп потребителю (Radix UI)
- Паттерн slots: header/footer props как именованные области

*Запрос ментору:* Объясни compound components с реальным примером кода

---

## Фаза 10: React Router v6

*Навигация и маршрутизация* · ⏱ 3-4 дня

### Основы роутинга
Routes, Route, Link, NavLink · день 1-2

- npm install react-router-dom
- BrowserRouter — оборачивает приложение в index.jsx
- Routes содержит все Route
- Route: path и element пропсы
- Link to="/about" — навигация без перезагрузки страницы
- NavLink — добавляет класс active для текущего пути
- Navigate to="/login" — программный редирект в JSX

*Запрос ментору:* Объясни React Router v6 с примером трёхстраничного приложения

### useParams, useNavigate, useLocation
Хуки роутера · день 2-3

- path="/users/:id" — динамический сегмент с двоеточием
- useParams() — const { id } = useParams()
- useNavigate() — const nav = useNavigate(); nav("/home")
- navigate(-1) — кнопка назад программно
- navigate("/path", { replace: true }) — без записи в историю
- useLocation() — { pathname, search, hash, state }
- useSearchParams() — работа с query string ?page=2&sort=name

*Запрос ментору:* Объясни динамические маршруты и хуки React Router v6

### Вложенные маршруты
Outlet, layout routes, protected routes · день 3-4

- Nested routes — Route внутри Route
- Outlet — место куда рендерятся дочерние маршруты
- Layout route: шапка/подвал + Outlet = общая структура страниц
- index route — маршрут по умолчанию для родительского пути
- Protected route: проверяет авторизацию, редиректит на login
- React.lazy + Suspense — lazy loading страниц по роутам
- path="*" — 404 страница ловит все несуществующие маршруты

*Запрос ментору:* Покажи пример layout route и protected route в React Router v6

---

## Фаза 11: Запросы к API

*fetch, axios, TanStack Query* · ⏱ 3-4 дня

### fetch и axios
Базовые HTTP запросы · день 1

- fetch — встроенный браузерный API для HTTP
- fetch возвращает промис; нужен response.json() для парсинга
- axios автоматически парсит JSON
- axios.create({ baseURL, timeout }) — базовые настройки
- Интерцепторы axios: добавить Authorization заголовок
- Ошибки: axios бросает при 4xx/5xx, fetch нет
- AbortController — отменить запрос

*Запрос ментору:* Сравни fetch и axios — когда что использовать в React

### TanStack Query
Стандарт для серверного стейта · день 2-3

- QueryClientProvider + new QueryClient() — setup приложения
- useQuery({ queryKey: ["users"], queryFn: fetchUsers })
- queryKey — массив: ключ кеша, перезапрос при изменении
- { data, isLoading, isError, error } — из useQuery
- useMutation({ mutationFn }) — для POST/PUT/DELETE
- onSuccess, onError — callbacks у мутации
- refetch, isFetching, isRefetching — дополнительные статусы

*Запрос ментору:* Объясни TanStack Query с примером списка и создания записи

### Паттерны данных
Loading, ошибки, оптимистик · день 3-4

- queryClient.invalidateQueries(["users"]) — сбросить кеш после мутации
- Optimistic update: обновить UI до ответа, откатить при ошибке
- Skeleton screens лучше спиннеров — нет layout shift
- Error boundary — компонент ловящий ошибки рендера
- Pagination: страница в queryKey; keepPreviousData для плавности
- useInfiniteQuery — подгрузка при скролле
- staleTime и gcTime — тонкая настройка стратегии кеша

*Запрос ментору:* Объясни оптимистичные обновления и invalidation в TanStack Query

---

## Фаза 12: TypeScript в React

*Props, хуки, события, утилитарные типы* · ⏱ 3-4 дня

### TypeScript база
Типы, интерфейсы, strict · день 1

- TypeScript — JavaScript с типами, компилируется в JS
- Vite + TS: выбрать React + TypeScript при создании проекта
- tsconfig.json strict: true — обязательно включить
- Базовые типы: string, number, boolean, null, undefined
- interface для объектов; type для union и сложных типов
- Union: type Status = "idle" | "loading" | "error" | "success"
- Дженерики: Array<string> или string[] — массив строк
- any — никогда: это отключает проверку типов

*Запрос ментору:* Объясни базовый TypeScript для React разработчика

### Типизация компонентов
Props, children, события · день 2

- interface ButtonProps { label: string; onClick: () => void }
- function Button({ label, onClick }: ButtonProps)
- React.FC устарел — типизируй пропсы напрямую
- children: React.ReactNode — самый широкий тип для children
- Опциональный проп: disabled?: boolean
- Событие onChange: React.ChangeEvent<HTMLInputElement>
- Событие клика: React.MouseEvent<HTMLButtonElement>
- ComponentPropsWithoutRef<"button"> — типы нативных атрибутов

*Запрос ментору:* Объясни типизацию React компонентов и событий в TypeScript

### Типизация хуков и API
useState, useRef, useContext, данные · день 3

- useState выводит тип из начального значения автоматически
- Явный тип: useState<User | null>(null)
- useRef: useRef<HTMLInputElement>(null)
- useContext: типизируй createContext сразу нужным типом
- API данные: interface User { id: number; name: string }
- Утилитарные типы: Partial, Required, Pick, Omit
- ReturnType<typeof fn> — тип возврата функции
- as const для литеральных типов массивов и объектов

*Запрос ментору:* Объясни типизацию хуков React в TypeScript с примерами

---

## Фаза 13: Тестирование

*Vitest, React Testing Library* · ⏱ 3 дня

### Основы тестирования
Виды тестов и инструменты · день 1

- Unit тест — тестирует одну функцию или компонент изолированно
- Integration тест — взаимодействие нескольких компонентов
- E2E тест — полный пользовательский сценарий (Playwright)
- Vitest — быстрый тест-раннер для Vite проектов
- React Testing Library — тестирование через пользовательский интерфейс
- describe / it / expect — структура тестов
- beforeEach / afterEach — setup и teardown

*Запрос ментору:* Объясни виды тестов и как настроить Vitest + RTL в Vite проекте

### Написание тестов
render, screen, userEvent · день 2-3

- render(<Component />) — рендер в тестовой среде
- screen.getByRole("button", { name: "Сохранить" })
- screen.getByText, screen.getByLabelText — другие queries
- getBy (ошибка если нет), findBy (async), queryBy (null если нет)
- await userEvent.click(button) — асинхронная симуляция
- await userEvent.type(input, "текст") — ввод
- Тестируй что видит пользователь, не детали реализации

*Запрос ментору:* Покажи пример тестирования формы с React Testing Library

---

## Фаза 14: Производительность

*Profiler, memo, lazy, code splitting* · ⏱ 3 дня

### Профилирование и React.memo
Найти и устранить лишние рендеры · день 1-2

- Не оптимизируй преждевременно — сначала измерь
- React DevTools Profiler: записывает рендеры и время
- Flame chart: какие компоненты перерендерились и почему
- Причина лишних рендеров: новая ссылка на объект или функцию
- React.memo(Component) — пропустить ренд если props не изменились
- useCallback для функций передаваемых в мемоизированные компоненты
- useMemo для дорогих вычислений используемых в рендере

*Запрос ментору:* Как искать проблемы производительности React — Profiler и подход

### Code splitting
Lazy, Suspense, маленький бандл · день 2-3

- Code splitting — разбить бандл на части, загружать по требованию
- React.lazy(() => import("./HeavyComponent")) — динамический импорт
- Suspense fallback={<Spinner/>} — оборачивает lazy компоненты
- Роутинг + lazy: каждая страница — отдельный чанк
- Vite создаёт chunk автоматически для каждого lazy импорта
- rollup-plugin-visualizer: анализ размера бандла
- Preload hints для критических но ещё не загруженных чанков

*Запрос ментору:* Объясни code splitting с React.lazy и Suspense на примере роутинга

---

## Фаза 15: Стейт-менеджеры

*Zustand, Redux Toolkit* · ⏱ 4-5 дней

### Когда нужен стейт-менеджер
Локальный vs глобальный · день 1

- Локальный стейт: данные одного или двух компонентов
- Context: тема, язык, авторизация — медленных изменений
- Zustand: глобальный UI стейт, минимальный бойлерплейт
- Redux Toolkit: корпоративный стандарт, строгая структура
- Серверный стейт (API данные): TanStack Query, не Redux!
- Jotai/Recoil: атомарный подход для гранулярных подписок
- Правило: не добавляй стейт-менеджер пока не нужен

*Запрос ментору:* Объясни разницу local state, Context, Zustand и Redux Toolkit

### Zustand
Минималистичный глобальный стейт · день 2-3

- npm install zustand
- create(set => ({ count: 0, inc: () => set(s => ({count: s.count+1})) }))
- Хранилище: стейт и actions в одном объекте
- const count = useStore(s => s.count) — selector
- Selector предотвращает лишние рендеры — подписка только на нужное
- persist middleware — автоматически localStorage
- devtools middleware — интеграция с Redux DevTools

*Запрос ментору:* Создай Zustand стор для корзины интернет-магазина с нуля

### Redux Toolkit
Корпоративный стандарт · день 3-5

- configureStore({ reducer: { counter: counterReducer } })
- createSlice: name, initialState, reducers в одном месте
- Actions генерируются автоматически из ключей reducers
- useSelector(state => state.counter.value) — читать стейт
- useDispatch() → dispatch(increment()) — отправить action
- createAsyncThunk — асинхронные actions для API
- RTK Query — встроенный инструмент для API запросов

*Запрос ментору:* Объясни Redux Toolkit с примером стора с синхронными и async actions

---

