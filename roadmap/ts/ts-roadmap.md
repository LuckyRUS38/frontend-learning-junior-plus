# TypeScript Roadmap

> Источник: сгенерировано из интерактивного roadmap (HTML). Этот .md — основной формат для чтения по фазам и подтемам.

## Оглавление

- **Фаза 0: Введение в TypeScript** — Зачем TS, установка, первый проект
- **Фаза 1: Базовые типы** — Примитивы, any, unknown, never, void, вывод типов
- **Фаза 2: Объекты и интерфейсы** — interface, type alias, readonly, optional
- **Фаза 3: Union, Intersection и Literal типы** — Составные типы TypeScript
- **Фаза 4: Массивы, кортежи, Enum** — Типизация коллекций
- **Фаза 5: Функции** — Типизация функций, overloads, this
- **Фаза 6: Generics** — Обобщённое программирование в TypeScript
- **Фаза 7: Классы в TypeScript** — Access modifiers, abstract, implements
- **Фаза 8: Type Narrowing** — Сужение типов и type guards
- **Фаза 9: Утилитарные типы** — Partial, Pick, Omit, Record и другие
- **Фаза 10: Mapped Types** — keyof, typeof, создание новых типов из существующих
- **Фаза 11: Conditional Types** — T extends U ? X : Y, infer
- **Фаза 12: Template Literal Types** — Строковые шаблоны на уровне типов
- **Фаза 13: Модули и Declaration Files** — Типизация JS библиотек без TS
- **Фаза 14: TypeScript в React** — Типизация компонентов, хуков, событий
- **Фаза 15: Продвинутые паттерны** — Branded types, Builder, Recursive, Variadic
- **Фаза 16: Конфигурация и инструменты** — tsconfig подробно, strict mode, утилиты

---

## Фаза 0: Введение в TypeScript

*Зачем TS, установка, первый проект* · ⏱ 2-3 дня

### Зачем TypeScript
Преимущества над JS и как работает · день 1

- TypeScript — надмножество JavaScript: любой JS является валидным TS
- Статическая типизация: ошибки типов находятся до запуска программы
- Автодополнение и рефакторинг в IDE — TypeScript Language Server
- TypeScript компилируется в обычный JS — браузер не знает о TS
- Чем больше проект — тем ощутимее польза от TypeScript
- Популярность: React, Angular, Vue, Node.js — всё на TS
- Постепенное внедрение: можно добавлять TS в JS проект файл за файлом
- TypeScript не замедляет runtime — только этап разработки

*Запрос ментору:* Объясни зачем нужен TypeScript и чем он лучше JavaScript

### Установка и настройка
tsc, tsconfig.json, первый файл · день 1-2

- npm install -D typescript — установить TypeScript
- npx tsc --init — создать tsconfig.json
- npx tsc file.ts — скомпилировать один файл
- npx tsc --watch — следить за изменениями
- ts-node — запускать .ts напрямую без компиляции
- Vite + TS: npm create vite@latest — выбрать TypeScript шаблон
- tsconfig.json — главный конфигурационный файл
- Расширение .ts для обычных файлов, .tsx для JSX

*Запрос ментору:* Как установить TypeScript и настроить первый проект

### tsconfig.json — основные опции
Ключевые настройки компилятора · день 2-3

- strict: true — включить все строгие проверки (обязательно!)
- target: ES2020 — в какую версию JS компилировать
- module: ESNext — система модулей
- moduleResolution: bundler — для Vite/Webpack проектов
- outDir: ./dist — куда класть скомпилированный JS
- rootDir: ./src — корень исходников
- include и exclude — какие файлы компилировать
- paths — алиасы для импортов: @/components вместо ../../components

*Запрос ментору:* Объясни основные опции tsconfig.json — что включать и зачем

---

## Фаза 1: Базовые типы

*Примитивы, any, unknown, never, void, вывод типов* · ⏱ 2-3 дня

### Примитивные типы
string, number, boolean, null, undefined · день 1

- string — любая строка: "hello", `world`
- number — любое число: 42, 3.14, NaN, Infinity
- boolean — только true или false
- null и undefined — самостоятельные типы при strictNullChecks: true
- string | null — nullable тип: строка или null
- symbol — уникальный примитив (Symbol())
- bigint — большие целые числа (42n)
- Аннотация: const name: string = "Иван"

*Запрос ментору:* Объясни базовые примитивные типы TypeScript с примерами

### any, unknown, never, void
Специальные типы TypeScript · день 1-2

- any — отключает проверку типов (избегай!)
- any: можно делать всё — присваивать куда угодно, вызывать методы
- unknown — безопасная альтернатива any
- unknown: нельзя использовать без сужения типа сначала
- Правило: используй unknown вместо any — заставляет делать проверки
- never — тип который никогда не наступает
- never: возврат из бесконечного цикла или функции бросающей ошибку
- void — функция ничего не возвращает (или возвращает undefined)

*Запрос ментору:* Объясни разницу any vs unknown vs never vs void в TypeScript

### Вывод типов (Type Inference)
TypeScript выводит тип сам · день 2-3

- Вывод из значения: const x = 5 — тип number выводится автоматически
- Лучше не дублировать: const name: string = "Ivan" — избыточно
- Когда нужна аннотация: параметры функций, возврат, пустой массив
- Literal types: const x = "hello" — тип "hello", не string
- Widening: let x = "hello" — тип string (let можно переприсвоить)
- Контекстуальный вывод: тип события в addEventListener выводится сам
- Вывод в объекте: { name: "Иван", age: 25 } — TypeScript выводит оба типа
- satisfies — проверить тип без сужения до него

*Запрос ментору:* Объясни type inference в TypeScript — когда TS выводит тип сам

---

## Фаза 2: Объекты и интерфейсы

*interface, type alias, readonly, optional* · ⏱ 3-4 дня

### Interface
Описание формы объекта · день 1

- interface User { name: string; age: number }
- Опциональное свойство: email?: string — может не быть
- Readonly: readonly id: number — нельзя изменить после создания
- Метод в интерфейсе: greet(): string — метод возвращающий строку
- Index signature: [key: string]: unknown — объект с произвольными ключами
- Расширение: interface Admin extends User { role: string }
- Declaration merging: один interface можно открыть и добавить поля
- Implements: class User implements IUser — класс реализует интерфейс

*Запрос ментору:* Объясни interface в TypeScript с примерами

### Type Alias
type — псевдонимы типов · день 2

- type User = { name: string; age: number } — псевдоним
- type ID = string | number — псевдоним для union
- type Callback = (err: Error | null, data: string) => void
- Рекурсивный тип: type Tree = { value: number; children: Tree[] }
- type не поддерживает declaration merging в отличие от interface
- type нельзя использовать в implements напрямую (только interface)
- Комбинирование: type AdminUser = User & { role: string }
- Практика: interface для объектов/классов, type для union и утилит

*Запрос ментору:* Объясни type alias в TypeScript и чем отличается от interface

### Interface vs Type: когда что
Практические отличия и рекомендации · день 3

- interface можно расширить через extends — type через &
- interface: declaration merging — открыть и добавить поля (полезно для augmentation)
- type: поддерживает union и primitive aliases — interface нет
- Оба поддерживают дженерики и пересечение
- Ошибки: interface даёт более читаемые сообщения об ошибках
- Рекомендация TypeScript team: interface для объектов, type для union
- В React: interface для Props, type для union state
- В библиотеках: interface чтобы пользователи могли расширять

*Запрос ментору:* Объясни отличия interface от type alias — когда что выбрать

---

## Фаза 3: Union, Intersection и Literal типы

*Составные типы TypeScript* · ⏱ 3 дня

### Union Types
Тип одно из нескольких значений · день 1

- type StringOrNumber = string | number — одно из
- Использование: function fn(x: string | number)
- TypeScript сужает тип внутри if/switch автоматически
- Nullability: string | null | undefined — nullable
- Discriminated Union: общее поле для различения вариантов
- type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number }
- switch(shape.kind) — TypeScript знает какой вариант в каждом case
- Exhaustive check через never: убедиться что все варианты покрыты

*Запрос ментору:* Объясни Union Types и discriminated union в TypeScript

### Intersection Types
Объединение нескольких типов в один · день 2

- type AdminUser = User & Admin — все свойства обоих типов
- Intersection примитивов: string & number = never (невозможно)
- Применение: расширить тип без наследования
- type WithTimestamps = T & { createdAt: Date; updatedAt: Date }
- Пересечение объектов: все поля присутствуют одновременно
- Конфликт: одинаковые ключи с несовместимыми типами = never для этого поля
- Mixin паттерн: несколько источников поведения через intersection
- Intersection vs extends: intersection нельзя переопределить метод

*Запрос ментору:* Объясни Intersection Types в TypeScript с примерами

### Literal и Template Literal типы
Точные значения как типы · день 3

- Literal type: type Status = "idle" | "loading" | "success" | "error"
- Числовой literal: type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6
- as const: const dirs = ["left", "right"] as const — literal типы
- as const объект: keyof typeof obj — ключи как union тип
- Template literal: type EventName = `on${string}` — шаблонный
- type CSSProperty = `${string}-${string}` — CSS property pattern
- Встроенные: Uppercase, Lowercase, Capitalize, Uncapitalize
- Применение: строго типизированные названия событий, маршрутов

*Запрос ментору:* Объясни literal types и as const в TypeScript с примерами

---

## Фаза 4: Массивы, кортежи, Enum

*Типизация коллекций* · ⏱ 2-3 дня

### Массивы и ReadonlyArray
Типизированные массивы · день 1

- string[] или Array<string> — массив строк (оба варианта равнозначны)
- (string | number)[] — массив строк или чисел
- ReadonlyArray<string> или readonly string[] — нельзя мутировать
- Пустой массив: const arr: string[] = [] — нужна аннотация
- Многомерный: number[][] — массив массивов чисел
- as const для массива: ["a", "b"] as const — readonly кортеж
- Вывод типа: const arr = [1, "a"] — тип (string | number)[]
- Array<never> — пустой тип, нельзя добавить элементы

*Запрос ментору:* Объясни типизацию массивов в TypeScript

### Кортежи (Tuple)
Массив с фиксированной длиной и типами · день 1-2

- type Point = [number, number] — пара чисел
- Именованный кортеж: [x: number, y: number] — для документации
- Опциональный элемент: [string, number?] — второй может отсутствовать
- Rest в кортеже: [string, ...number[]] — строка и любое количество чисел
- Деструктуризация: const [name, age]: [string, number] = data
- Кортеж vs массив: кортеж — фиксированная структура, массив — переменная длина
- Применение: возврат нескольких значений из функции
- React: useState возвращает кортеж [value, setter]

*Запрос ментору:* Объясни кортежи (tuple) в TypeScript с примерами

### Enum и альтернативы
Перечисления и их замена · день 2-3

- enum Direction { Up, Down, Left, Right } — числовой enum
- Direction.Up === 0 по умолчанию
- Строковый enum: enum Color { Red = "RED", Blue = "BLUE" }
- const enum — встраивается при компиляции, нет runtime объекта
- Проблемы enum: создаёт runtime объект, не tree-shakeable, bidirectional
- Современная альтернатива: const DIRS = { Up: "up" } as const
- Тип из as const: typeof DIRS[keyof typeof DIRS]
- Рекомендация: избегай enum, используй as const объекты

*Запрос ментору:* Объясни enum в TypeScript и почему as const часто лучше

---

## Фаза 5: Функции

*Типизация функций, overloads, this* · ⏱ 3 дня

### Типизация функций
Параметры, возврат, необязательные аргументы · день 1

- function add(a: number, b: number): number { return a + b }
- Опциональный параметр: function fn(x?: number) — может быть undefined
- Дефолтный параметр: function fn(x = 0): number — вывод типа от дефолта
- Rest параметры: function fn(...args: string[]): void
- Деструктуризация в параметрах: function fn({ name, age }: User)
- Тип функции: type Handler = (event: MouseEvent) => void
- Функция как параметр: function run(cb: () => void)
- Возврат void vs undefined: void — не используем возврат, undefined — явный

*Запрос ментору:* Объясни типизацию функций в TypeScript

### Перегрузки функций
Несколько сигнатур для одной функции · день 2

- Overload signatures — несколько объявлений перед реализацией
- function fn(x: string): string
- function fn(x: number): number
- function fn(x: string | number): string | number { } — реализация
- Реализация не видна снаружи — только overload signatures
- Применение: функция с разным поведением в зависимости от типа
- Лучше перегрузок: generic + conditional types
- Method overloads в классах работают аналогично

*Запрос ментору:* Объясни перегрузки функций в TypeScript с примерами

### this и типы коллбэков
Типизация контекста вызова · день 3

- this параметр: function fn(this: User, x: number) — фиктивный первый параметр
- Запрет потери контекста: TypeScript проверяет this при вызове
- arrow function в классе: нет проблемы с this
- ReturnType<typeof fn> — извлечь тип возврата функции
- Parameters<typeof fn> — извлечь типы параметров как кортеж
- Awaited<ReturnType<typeof fn>> — тип промиса из async функции
- Callback типы: type OnChange = (value: string) => void
- Generic callback: type Mapper<T, U> = (item: T) => U

*Запрос ментору:* Объясни ReturnType Parameters Awaited и this параметр в TypeScript

---

## Фаза 6: Generics

*Обобщённое программирование в TypeScript* · ⏱ 4-5 дней

### Базовые дженерики
Параметры типов в функциях · день 1-2

- function identity<T>(x: T): T { return x } — простейший generic
- T — конвенция, но можно любое имя: Value, Item, TKey
- Несколько параметров: function pair<T, U>(a: T, b: U): [T, U]
- Вывод типа: identity(42) — T = number, не нужно указывать явно
- Явная передача: identity<string>("hello") — когда вывод не работает
- Generic массив: function first<T>(arr: T[]): T | undefined
- Generic промис: function fetchUser(): Promise<User>
- Комбинация: async function get<T>(url: string): Promise<T>

*Запрос ментору:* Объясни generics в TypeScript с практическими примерами

### Constraints (ограничения)
extends в дженериках · день 2-3

- function fn<T extends string>(x: T): T — T должен быть string
- function fn<T extends object>(x: T): T — только объекты
- keyof T — union всех ключей типа T
- function get<T, K extends keyof T>(obj: T, key: K): T[K]
- extends с интерфейсом: function fn<T extends { id: number }>(x: T)
- Дефолтный тип: function fn<T = string>(x?: T): T
- Несколько constraints: T extends A & B
- Применение: функция которая работает с любым объектом у которого есть нужное поле

*Запрос ментору:* Объясни constraints в generics с keyof и extends

### Generic интерфейсы и классы
Обобщённые структуры данных · день 3-4

- interface Repository<T> { findById(id: number): T | null }
- interface ApiResponse<T> { data: T; status: number; message: string }
- Дефолтный параметр: interface Container<T = string> { value: T }
- class Stack<T> { private items: T[] = []; push(item: T): void { } }
- Extends в generic классе: class NumberStack extends Stack<number>
- Generic React компонент: function List<T>({ items }: { items: T[] })
- Generic хук: function useFetch<T>(url: string): { data: T | null }
- Вывод в экземпляре: new Stack<number>() или new Stack() с первым push

*Запрос ментору:* Объясни generic интерфейсы и классы с практическими примерами

---

## Фаза 7: Классы в TypeScript

*Access modifiers, abstract, implements* · ⏱ 3-4 дня

### Access modifiers
public, private, protected, readonly · день 1

- public — доступно отовсюду (по умолчанию)
- private — только внутри класса (TypeScript compile-time)
- protected — внутри класса и потомков
- readonly — нельзя переопределить после создания экземпляра
- Краткий конструктор: constructor(private name: string, readonly id: number)
- Краткий конструктор эквивалентен объявлению и присвоению в теле
- ES Private Fields #name — настоящая приватность в runtime
- static методы и свойства: принадлежат классу, не экземпляру

*Запрос ментору:* Объясни access modifiers в TypeScript классах с примерами

### Implements и abstract
Интерфейсы для классов и абстракция · день 2-3

- class Dog implements Animal — класс обязан реализовать интерфейс
- Несколько интерфейсов: class Admin implements IUser, IAdmin
- Implements не добавляет runtime поведение — только проверка типов
- abstract class — нельзя создать экземпляр напрямую
- abstract method — должен быть реализован в каждом потомке
- abstract class задаёт контракт для всех подклассов
- abstract vs interface: abstract может иметь реализацию методов
- Применение: base class с общей логикой и абстрактными хуками

*Запрос ментору:* Объясни abstract class и implements в TypeScript

### Декораторы
Метаданные и трансформация классов · день 3-4

- Декораторы — экспериментальная фича, включить experimentalDecorators: true
- Class decorator: @sealed — оборачивает конструктор класса
- Method decorator: @log — оборачивает метод
- Property decorator: @required — трансформирует свойство
- Parameter decorator: @inject — метаданные параметра
- reflect-metadata — для работы с метаданными в runtime
- Активно используются в NestJS и Angular
- TypeScript 5.0+: новый синтаксис декораторов по стандарту TC39

*Запрос ментору:* Объясни декораторы в TypeScript с примерами применения

---

## Фаза 8: Type Narrowing

*Сужение типов и type guards* · ⏱ 3 дня

### Встроенные способы сужения
typeof, instanceof, in, truthiness · день 1

- typeof x === "string" — x становится string в этой ветке
- typeof: работает с string, number, boolean, symbol, bigint, function, object, undefined
- instanceof Date — x становится Date
- in operator: "name" in obj — obj имеет поле name
- Truthiness: if (x) { } — x не null, undefined, 0, "", NaN
- Equality: if (x === "hello") — x буквально "hello"
- Control flow analysis — TypeScript отслеживает тип по всем путям
- Narrowing в switch: case определяет тип в своём блоке

*Запрос ментору:* Объясни type narrowing в TypeScript — все встроенные способы

### User-defined Type Guards
Пользовательские функции сужения · день 2

- function isUser(x: unknown): x is User — type predicate
- Если isUser вернул true — TypeScript знает что x это User
- Assertion function: function assert(x: unknown): asserts x is User
- Если assertion не бросила — x это User после вызова
- Практика: валидация API ответов перед использованием
- Discriminated union + switch — самый надёжный паттерн сужения
- Non-null assertion: value! — сказать TS что точно не null (осторожно)
- satisfies — проверить тип без сужения к нему

*Запрос ментору:* Объясни user-defined type guards и assertion functions

### Exhaustiveness checking
Убедиться что покрыты все случаи · день 3

- never в switch default — если добрались до default, что-то не так
- function assertNever(x: never): never { throw new Error() }
- switch(shape.kind) { case "circle": ... default: assertNever(shape) }
- При добавлении нового варианта в union — TypeScript укажет на неохваченный case
- Discriminated union — лучший паттерн для exhaustive checks
- Partial narrowing: Exclude<T, AlreadyHandled>
- Паттерн с объектом handlers вместо switch
- never как bottom type — ничто не присваивается never

*Запрос ментору:* Объясни exhaustiveness checking через never в TypeScript

---

## Фаза 9: Утилитарные типы

*Partial, Pick, Omit, Record и другие* · ⏱ 3-4 дня

### Трансформации объектов
Partial, Required, Readonly, Pick, Omit · день 1-2

- Partial<T> — все свойства опциональными: для partial update
- Required<T> — все свойства обязательными: убрать все ?
- Readonly<T> — все свойства readonly: для immutable объектов
- Pick<T, "name" | "age"> — взять только нужные свойства
- Omit<T, "password"> — исключить ненужные свойства
- Record<string, number> — объект с ключами string и значениями number
- Record<K, V>: эквивалент { [key in K]: V } через mapped type
- Применение: UpdateUser = Partial<Omit<User, "id">>

*Запрос ментору:* Объясни Partial Required Readonly Pick Omit Record с примерами

### Условные утилитарные типы
Exclude, Extract, NonNullable, ReturnType · день 2-3

- Exclude<T, U> — убрать из union те типы что входят в U
- Exclude<string | number | boolean, string> = number | boolean
- Extract<T, U> — оставить только общие для T и U типы
- NonNullable<T> — убрать null и undefined из типа
- ReturnType<typeof fn> — тип возврата функции
- Parameters<typeof fn> — кортеж типов параметров
- Awaited<Promise<string>> = string — распаковать промис
- InstanceType<typeof MyClass> — тип экземпляра класса

*Запрос ментору:* Объясни Exclude Extract NonNullable ReturnType Awaited с примерами

---

## Фаза 10: Mapped Types

*keyof, typeof, создание новых типов из существующих* · ⏱ 3-4 дня

### keyof и typeof
Операторы для работы с типами · день 1

- keyof T — union всех ключей типа T
- keyof User = "name" | "age" | "email"
- typeof переменной — получить тип значения
- typeof obj — { name: string; age: number }
- Комбинация: keyof typeof config — ключи объекта как union
- T[K] — тип поля K в объекте T (indexed access type)
- User["name"] = string — тип поля name
- User[keyof User] — union всех типов значений объекта

*Запрос ментору:* Объясни keyof и typeof в TypeScript с практическими примерами

### Создание Mapped Types
Трансформация всех свойств типа · день 2-3

- { [K in keyof T]: T[K] } — копия типа T
- Partial реализация: { [K in keyof T]?: T[K] }
- Readonly реализация: { readonly [K in keyof T]: T[K] }
- Трансформация значений: { [K in keyof T]: string } — все значения string
- Модификаторы: -readonly убирает readonly; -? убирает optional
- Remapping с as: { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }
- Фильтрация свойств: as never убирает ключ из mapped type
- Применение: создание getters, setters, строгих версий типов

*Запрос ментору:* Объясни mapped types в TypeScript с примерами трансформаций

### Продвинутые Mapped Types
Template literals + mapped = мощные паттерны · день 3-4

- type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K] }
- type EventHandlers<T> = { [K in keyof T as `on${Capitalize<string & K>}Change`]: (val: T[K]) => void }
- Mapped type + conditional: отфильтровать только методы
- type Methods<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
- Deep Readonly через рекурсивный mapped type
- type DeepReadonly<T> = { readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K] }
- Mapped types строятся на основе keyof и создают утилитарные типы
- Изучение builtin утилит через их реализацию

*Запрос ментору:* Объясни продвинутые mapped types с template literals

---

## Фаза 11: Conditional Types

*T extends U ? X : Y, infer* · ⏱ 3-4 дня

### Базовые Conditional Types
Условные типы как тернарный оператор · день 1-2

- T extends U ? X : Y — если T присваивается U то X иначе Y
- type IsString<T> = T extends string ? true : false
- IsString<string> = true; IsString<number> = false
- Distributive: conditional type применяется к каждому члену union
- string | number extends string ? X : Y = (string extends string ? X : Y) | (number extends string ? X : Y)
- NonNullable реализация: T extends null | undefined ? never : T
- Exclude реализация: T extends U ? never : T
- Extract реализация: T extends U ? T : never

*Запрос ментору:* Объясни conditional types в TypeScript с примерами

### infer ключевое слово
Извлечение типов в conditional · день 2-3

- infer R — объявить переменную типа внутри extends
- ReturnType реализация: T extends (...args: any) => infer R ? R : never
- Элемент массива: T extends (infer U)[] ? U : never
- Первый параметр: T extends (first: infer F, ...rest: any) => any ? F : never
- Promise распаковка: T extends Promise<infer U> ? U : T
- Рекурсивный infer: глубокая распаковка вложенных типов
- infer можно использовать только в extends части conditional
- Множественный infer: infer A extends infer B — новый синтаксис TS 4.7

*Запрос ментору:* Объясни infer в conditional types с примерами

---

## Фаза 12: Template Literal Types

*Строковые шаблоны на уровне типов* · ⏱ 2-3 дня

### Синтаксис и встроенные утилиты
Шаблонные типы и string manipulation · день 1

- type Hello = `hello_${string}` — строки начинающиеся с hello_
- type EventName = `on${string}` — строки начинающиеся с on
- Комбинирование union: type Dir = "left" | "right"; type Padding = `padding-${Dir}`
- paddingLeft, paddingRight — автоматически из template literal + union
- Capitalize<S>: первая буква заглавная
- Uncapitalize<S>: первая буква строчная
- Uppercase<S>: всё заглавными
- Lowercase<S>: всё строчными

*Запрос ментору:* Объясни template literal types в TypeScript с примерами

### Применения
CSS свойства, события, маршруты API · день 2-3

- Типизация CSS-in-JS: type CSSColor = `#${string}` | "red" | "blue"
- Event handler names: type HandlerKey<T> = `on${Capitalize<string & keyof T>}`
- API маршруты: type Route = `/api/${string}`
- Getter/setter паттерн через template + mapped types
- Автодополнение для string паттернов — IDE подсказывает варианты
- Строгая типизация i18n ключей: type TranslationKey = keyof typeof translations
- Ограничение формата: type HexColor = `#${string}` — проверка формата цвета
- Комбинация с infer: извлечь часть строки из шаблонного литерала

*Запрос ментору:* Объясни применения template literal types на практике

---

## Фаза 13: Модули и Declaration Files

*Типизация JS библиотек без TS* · ⏱ 2-3 дня

### Declaration Files (.d.ts)
Как TypeScript описывает JS библиотеки · день 1

- .d.ts файл — только типы, без реализации
- @types/package — пакеты с типами от DefinitelyTyped
- npm install -D @types/node @types/express
- Если @types нет — можно написать свой .d.ts
- declare const, declare function, declare class — ambient declarations
- declare module "package-name" { } — объявить тип для JS модуля
- lib.d.ts — встроенные типы браузера и Node.js
- skipLibCheck: true — пропустить проверку .d.ts файлов

*Запрос ментору:* Объясни declaration files и @types в TypeScript

### Module Augmentation
Расширение существующих типов · день 2-3

- Module augmentation — добавить типы в существующий модуль
- declare module "express" { interface Request { user?: User } }
- Расширение глобального: declare global { interface Window { myLib: Lib } }
- Merging интерфейсов через declaration merging
- Augment встроенных типов: Array<T>.prototype.custom()
- paths в tsconfig.json: алиасы импортов
- baseUrl и paths: "@/*": ["./src/*"] для абсолютных путей
- typeRoots и types: контролировать какие @types подключаются

*Запрос ментору:* Объясни module augmentation и расширение существующих типов

---

## Фаза 14: TypeScript в React

*Типизация компонентов, хуков, событий* · ⏱ 4-5 дней

### Компоненты и Props
Типизация React компонентов · день 1-2

- interface ButtonProps { label: string; onClick: () => void }
- function Button({ label, onClick }: ButtonProps): JSX.Element
- React.FC устарел — типизируй напрямую через параметры
- children: React.ReactNode — самый широкий тип
- Опциональный проп: disabled?: boolean
- style: React.CSSProperties — для объектов стилей
- ref: React.Ref<HTMLButtonElement> — для forwardRef компонентов
- ComponentPropsWithoutRef<"button"> — все нативные атрибуты кнопки

*Запрос ментору:* Объясни типизацию React компонентов и props в TypeScript

### События и Refs
Типизация DOM событий · день 2-3

- React.ChangeEvent<HTMLInputElement> — для onChange инпута
- React.MouseEvent<HTMLButtonElement> — для onClick
- React.FormEvent<HTMLFormElement> — для onSubmit
- e.target.value — TypeScript знает тип из HTMLInputElement
- useRef<HTMLInputElement>(null) — типизированная ссылка на DOM
- ref.current — HTMLInputElement | null после useRef
- Non-null assertion в ref: ref.current! — когда уверен что не null
- forwardRef: React.forwardRef<HTMLInputElement, Props>((props, ref) => ...)

*Запрос ментору:* Объясни типизацию событий и refs в React с TypeScript

### Хуки с TypeScript
useState, useReducer, useContext · день 3-4

- useState<User | null>(null) — явный тип для null начального значения
- useState вывод: useState(0) — тип number без аннотации
- useReducer: типизировать State и Action через interface
- type Action = { type: "increment" } | { type: "setUser"; payload: User }
- createContext<ThemeContextType | null>(null) — типизированный контекст
- useContext возвращает ThemeContextType | null — нужно сужение
- Custom hook с generics: function useLocalStorage<T>(key: string, init: T)
- Generic hook возврат: [T, (val: T) => void] как кортеж

*Запрос ментору:* Объясни типизацию хуков React в TypeScript

---

## Фаза 15: Продвинутые паттерны

*Branded types, Builder, Recursive, Variadic* · ⏱ 1-2 нед

### Branded Types
Номинальная типизация в структурной системе · день 1-2

- TypeScript — структурная типизация: совместимость по форме
- Проблема: type UserId = string; type OrderId = string — совместимы!
- Branded type: type UserId = string & { readonly _brand: "UserId" }
- Функция-конструктор: function userId(s: string): UserId { return s as UserId }
- Теперь UserId и OrderId несовместимы — TypeScript не перепутает
- Применение: id типы, денежные единицы, валидированные строки
- Более чистый синтаксис через declare: type UserId = string & { _brand: "user" }
- Opaque types — паттерн для избегания путаницы похожих типов

*Запрос ментору:* Объясни branded types в TypeScript — зачем и как использовать

### Рекурсивные и Variadic типы
Сложные структуры типов · день 3-4

- Рекурсивный тип: type JSON = string | number | boolean | null | JSON[] | { [k: string]: JSON }
- Deep Partial: type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T
- Variadic tuple: type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]
- Inference в variadic: infer Head, infer Tail для first/rest
- type Reverse<T extends unknown[]> = T extends [infer H, ...infer R] ? [...Reverse<R>, H] : T
- Ограничение глубины: TypeScript ограничивает рекурсию для защиты компилятора
- Conditional + mapped + recursive = мощные трансформации типов
- Использовать только когда действительно нужно — сложные типы тяжело читать

*Запрос ментору:* Объясни рекурсивные типы и variadic tuples в TypeScript

### Builder и Fluent interface паттерны
TypeScript для безопасных API · день 5-6

- Builder pattern: типизированная пошаговая конструкция объекта
- Fluent interface: методы возвращают this — цепочка вызовов
- Discriminated state: тип меняется в зависимости от вызовов
- Function overloads для разных веток builder
- Generic builder: накапливать типы при каждом вызове
- Type-safe event emitter: строгие типы для on/emit
- Result type: type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }
- Option/Maybe type — избежать null без nullable типов

*Запрос ментору:* Объясни Builder pattern и Result type в TypeScript

---

## Фаза 16: Конфигурация и инструменты

*tsconfig подробно, strict mode, утилиты* · ⏱ 2-3 дня

### tsconfig.json подробно
Все важные опции · день 1

- strict: включает strictNullChecks, noImplicitAny, strictFunctionTypes и другие
- noImplicitAny: ошибка если тип выведен как any
- strictNullChecks: null и undefined — отдельные типы
- strictFunctionTypes: строгая проверка типов функций
- noUnusedLocals и noUnusedParameters: ошибки за неиспользуемые переменные
- noImplicitReturns: все ветки функции должны возвращать значение
- exactOptionalPropertyTypes: undefined нельзя явно присвоить optional полю
- isolatedModules: каждый файл как независимый модуль (для Vite)

*Запрос ментору:* Объясни важные опции tsconfig.json — что включать и зачем

### Инструменты экосистемы
tsc, ts-node, tsx, type-checking в CI · день 2

- tsc --noEmit — проверить типы без компиляции (для CI)
- ts-node — запускать TypeScript напрямую в Node.js
- tsx — быстрая альтернатива ts-node (через esbuild)
- typescript-eslint — линтинг TypeScript кода
- Правила eslint для TypeScript: no-explicit-any, no-unsafe-assignment
- Vite не проверяет типы при сборке — нужен отдельный tsc --noEmit
- GitHub Actions: добавить tsc --noEmit в CI pipeline
- ts-prune — найти неиспользуемые экспорты

*Запрос ментору:* Как настроить type-checking в CI и инструменты TypeScript экосистемы

### Миграция JS проекта на TypeScript
Постепенное добавление типов · день 3

- allowJs: true — TypeScript принимает .js файлы
- checkJs: true — проверять JS файлы через JSDoc
- Переименовывать файлы .js → .ts по одному
- noImplicitAny: false на старте — включить позже
- any как временная заглушка — помечать TODO
- @ts-ignore и @ts-expect-error — подавить ошибку временно
- Strict mode включать постепенно: сначала strictNullChecks, потом остальное
- Автоматическая миграция: ts-migrate от Airbnb

*Запрос ментору:* Объясни стратегию миграции JavaScript проекта на TypeScript

---
