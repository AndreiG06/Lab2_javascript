# Документация методов работы с массивами

Данный файл содержит полифилы (собственные реализации) основных методов для работы с массивами в JavaScript.

---

## Функция `printArray`

```javascript
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Element ${i}: value ${array[i]}`);
  }
}
```

**Описание:** Выводит элементы массива в консоль в формате `Element N: value X`.

**Параметры:**
- `array` (Array) — Массив для вывода

**Возвращаемое значение:** `undefined`

**Пример использования:**
```javascript
printArray(['a', 'b', 'c']);
// Вывод:
// Element 0: value a
// Element 1: value b
// Element 2: value c
```

---

## Функция `printArray1`

```javascript
function printArray1(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i}:  ${array[i]}`);
  }
}
```

**Описание:** Выводит элементы массива в консоль в более компактном формате `N: X`.

**Параметры:**
- `array` (Array) — Массив для вывода

**Возвращаемое значение:** `undefined`

**Пример использования:**
```javascript
printArray1(['a', 'b', 'c']);
// Вывод:
// 0:  a
// 1:  b
// 2:  c
```

---

## Функция `forEach`

```javascript
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
```

**Описание:** Выполняет переданный колбэк для каждого элемента массива. Не возвращает значение (undefined).

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция вида `(element, index, array)`

**Возвращаемое значение:** `undefined`

**Пример использования:**
```javascript
const nums = [1, 2, 3, 4, 5];
forEach(nums, (el, i) => console.log(`Element: ${el}, Index: ${i}`));
// Вывод:
// Element: 1, Index: 0
// Element: 2, Index: 1
// Element: 3, Index: 2
// Element: 4, Index: 3
// Element: 5, Index: 4
```

**Возможные ошибки:**
1. Если передать вместо колбэка что-то другое (число, строку и т.д.), функция выдаст ошибку, так как ожидается именно функция.
2. Если вместо массива передать число или строку, функция также выдаст ошибку, так как ожидается массив.

---

## Функция `map`

```javascript
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
```

**Описание:** Создаёт новый массив, содержащий результаты вызова колбэка для каждого элемента исходного массива.

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция преобразования `(element, index, array)`

**Возвращаемое значение:** Новый массив с преобразованными элементами

**Пример использования:**
```javascript
const nums = [1, 2, 3, 4, 5];
const squared = map(nums, (el) => el * el);
console.log(squared);  // [1, 4, 9, 16, 25]

// Пошагово:
// el=1: 1 * 1 = 1
// el=2: 2 * 2 = 4
// el=3: 3 * 3 = 9
// el=4: 4 * 4 = 16
// el=5: 5 * 5 = 25
```

**Важное замечание:** Исходный массив остаётся неизменённым. Функция создаёт и возвращает новый массив.

---

## Функция `filter`

```javascript
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}
```

**Описание:** Создаёт новый массив из элементов, для которых колбэк вернул `true`.

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция-предикат `(element, index, array) => boolean`

**Возвращаемое значение:** Отфильтрованный массив

**Пример использования:**
```javascript
const nums = [1, 2, 3, 4, 5];
const evens = filter(nums, (el) => el % 2 === 0);
console.log(evens);  // [2, 4]

// Пошагово:
// el=1: 1 % 2 === 0 ? false (пропускаем)
// el=2: 2 % 2 === 0 ? true (добавляем)
// el=3: 3 % 2 === 0 ? false (пропускаем)
// el=4: 4 % 2 === 0 ? true (добавляем)
// el=5: 5 % 2 === 0 ? false (пропускаем)
// Результат: [2, 4]
```

**Важное замечание:** Исходный массив не изменяется. Возвращается новый массив с отфильтрованными элементами.

---

## Функция `find`

```javascript
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}
```

**Описание:** Возвращает первый элемент массива, для которого колбэк вернул `true`. Если такой элемент не найден — возвращает `undefined`.

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция-предикат `(element, index, array) => boolean`

**Возвращаемое значение:** Найденный элемент или `undefined`

**Пример использования:**
```javascript
const nums = [1, 2, 3, 4, 5];
const firstEven = find(nums, (el) => el % 2 === 0);
console.log(firstEven);  // 2

// Пошагово:
// el=1: 1 % 2 === 0 ? false (продолжаем)
// el=2: 2 % 2 === 0 ? true (ВОЗВРАЩАЕМ 2, остальное не проверяем!)
```

**Важное замечание:** Функция **останавливается при первом совпадении**, не проверяя остальные элементы. Это отличает её от `filter()`, который проверяет все элементы.

---

## Функция `some`

```javascript
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}
```

**Описание:** Проверяет, существует ли хотя бы один элемент массива, удовлетворяющий условию колбэка. Останавливается при первом совпадении.

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция-предикат `(element, index, array) => boolean`

**Возвращаемое значение:** `true` если найден хотя бы один подходящий элемент, `false` если не найден ни один

**Пример использования:**
```javascript
const nums = [1, 2, 3, 4, 5];
console.log(some(nums, (el) => el > 4));  // true

// Пошагово:
// el=1: 1 > 4 ? false (продолжаем)
// el=2: 2 > 4 ? false (продолжаем)
// el=3: 3 > 4 ? false (продолжаем)
// el=4: 4 > 4 ? false (продолжаем)
// el=5: 5 > 4 ? true (ВОЗВРАЩАЕМ true)
```

**Отличие от `every()`:** 
- `some()` — "есть ли хотя бы один элемент, который удовлетворяет условию?"
- `every()` — "удовлетворяют ли **все** элементы условию?"

---

## Функция `every`

```javascript
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}
```

**Описание:** Проверяет, удовлетворяют ли ВСЕ элементы массива условию колбэка. Останавливается при первом несоответствии.

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция-предикат `(element, index, array) => boolean`

**Возвращаемое значение:** `true` если все элементы прошли проверку, `false` если хотя бы один не прошёл

**Пример использования:**
```javascript
console.log(every([2, 4, 6], (el) => el % 2 === 0));  // true

// Пошагово:
// el=2: 2 % 2 === 0 ? true (продолжаем)
// el=4: 4 % 2 === 0 ? true (продолжаем)
// el=6: 6 % 2 === 0 ? true (продолжаем)
// Все прошли проверку → ВОЗВРАЩАЕМ true

console.log(every([2, 3, 4], (el) => el % 2 === 0));  // false

// Пошагово:
// el=2: 2 % 2 === 0 ? true (продолжаем)
// el=3: 3 % 2 === 0 ? false (ВОЗВРАЩАЕМ false, остальное не проверяем)
```

**Отличие от `some()`:**
- `some()` — ищет **первый `true`** (возвращает `true` как только найдёт)
- `every()` — ищет **первый `false`** (возвращает `false` как только найдёт)

---

## Функция `reduce`

```javascript
function reduce(array, callback, initialValue) {
  if (array.length === 0 && arguments.length < 3) {
    return undefined;
  }

  let accumulator;
  let startIndex;

  if (arguments.length >= 3) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
```

**Описание:** Последовательно обрабатывает элементы массива, накапливая результат в аккумуляторе. Если `initialValue` не передан — первый элемент становится аккумулятором. Если массив пустой и `initialValue` не передан — возвращает `undefined`.

**Параметры:**
- `array` (Array) — Исходный массив
- `callback` (Function) — Функция `(accumulator, element, index, array)`
- `initialValue` (*) — Начальное значение аккумулятора (необязательно)

**Возвращаемое значение:** Итоговое значение аккумулятора

**Пример 1: Суммирование с initialValue**
```javascript
const nums = [1, 2, 3, 4, 5];
const sum = reduce(nums, (acc, el) => acc + el, 0);
console.log(sum);  // 15

// Пошагово:
// START: acc = 0 (initialValue)
// el=1: acc = 0 + 1 = 1
// el=2: acc = 1 + 2 = 3
// el=3: acc = 3 + 3 = 6
// el=4: acc = 6 + 4 = 10
// el=5: acc = 10 + 5 = 15
// RETURN: 15
```

**Пример 2: Произведение без initialValue**
```javascript
const nums = [2, 3, 4];
const product = reduce(nums, (acc, el) => acc * el);
console.log(product);  // 24

// Пошагово:
// START: acc = 2 (первый элемент, initialValue не передан)
// el=3: acc = 2 * 3 = 6
// el=4: acc = 6 * 4 = 24
// RETURN: 24
```

**Пример 3: Пустой массив без initialValue**
```javascript
const empty = [];
const result = reduce(empty, (acc, el) => acc + el);
console.log(result);  // undefined

// Условие срабатывает:
// array.length === 0 && arguments.length < 3 → true
// RETURN: undefined
```

**Важные замечания:**
1. `reduce()` — самая мощная и универсальная функция. С её помощью можно реализовать `map()` и `filter()`.
2. Когда `initialValue` **не передан**, цикл начинается со **второго элемента** (индекс 1).
3. Когда `initialValue` **передан**, цикл начинается с **первого элемента** (индекс 0).
4. Пустой массив без `initialValue` возвращает `undefined`, а не ошибку.

---

---

## Полный пример использования всех функций

```javascript
const nums = [1, 2, 3, 4, 5];

// 1. Вывод массива
printArray(nums);
// Element 0: value 1
// Element 1: value 2
// ...

// 2. Итерация
forEach(nums, (el, i) => console.log(`${i}: ${el}`));

// 3. Преобразование
const squared = map(nums, (el) => el * el);
console.log(squared);  // [1, 4, 9, 16, 25]

// 4. Фильтрация
const evens = filter(nums, (el) => el % 2 === 0);
console.log(evens);  // [2, 4]

// 5. Поиск
const firstEven = find(nums, (el) => el % 2 === 0);
console.log(firstEven);  // 2

// 6. Проверка "хотя бы один"
console.log(some(nums, (el) => el > 4));  // true

// 7. Проверка "все ли"
console.log(every([2, 4, 6], (el) => el % 2 === 0));  // true

// 8. Накопление
const sum = reduce(nums, (acc, el) => acc + el, 0);
console.log(sum);  // 15
```

---

**1. Преимущества колбэков**

- **Читаемость** — пишешь _что_ сделать, а не _как_ перебирать: `filter(isAdult)` понятнее, чем цикл с условием внутри.
- **Иммутабельность** — методы не трогают исходный массив, а возвращают новый.
- **Цепочки** — можно комбинировать в одну строку: `arr.filter(...).map(...)`.

---

**2. Проблемы и решения**

- **Производительность** — колбэки немного медленнее чистого `for` на очень больших данных. Если важна скорость - используем `for`.
- **Потеря `this`** — обычные функции теряют контекст объекта. Решение: стрелочные функции `() => {}`.
- **Вложенность** — несколько колбэков друг в друге плохо читаются. Решение: выносить логику в именованные функции.
  
---

**3. Проблемы и решения**

Map: let r = []; for(let i of a) r.push(cb(i)); return r; (создает измененную копию).

Filter: let r = []; for(let i of a) if(cb(i)) r.push(i); return r; (отбирает по условию).

Find: for(let i of a) if(cb(i)) return i; (возвращает первый совпавший или undefined).

Some: for(let i of a) if(cb(i)) return true; return false; (хотя бы один подошел).

Every: for(let i of a) if(!cb(i)) return false; return true; (все должны подойти).

Reduce: let acc = init; for(let i of a) acc = cb(acc, i); return acc; (сжимает всё в одно значение)
