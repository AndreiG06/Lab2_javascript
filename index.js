/**
 * Выводит элементы массива в консоль в формате "Element N: value X".
 * @param {Array} array - Массив для вывода
 */
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Element ${i}: value ${array[i]}`);
  }
}

/**
 * Выводит элементы массива в консоль в формате "N:  X".
 * @param {Array} array - Массив для вывода
 */
function printArray1(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i}:  ${array[i]}`);
  }
}

/**
 * Выполняет переданный колбэк для каждого элемента массива.
 * Не возвращает значение (undefined).
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция вида (element, index, array)
 */
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

/**
 * Создаёт новый массив, содержащий результаты вызова колбэка
 * для каждого элемента исходного массива.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция преобразования (element, index, array)
 * @returns {Array} Новый массив с преобразованными элементами
 */
function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}

/**
 * Создаёт новый массив из элементов, для которых колбэк вернул true.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция-предикат (element, index, array) => boolean
 * @returns {Array} Отфильтрованный массив
 */
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

/**
 * Возвращает первый элемент массива, для которого колбэк вернул true.
 * Если такой элемент не найден — возвращает undefined.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция-предикат (element, index, array) => boolean
 * @returns {*} Найденный элемент или undefined
 */
function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

/**
 * Проверяет, существует ли хотя бы один элемент массива,
 * удовлетворяющий условию колбэка. Останавливается при первом совпадении.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция-предикат (element, index, array) => boolean
 * @returns {boolean} true если найден хотя бы один подходящий элемент
 */
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

/**
 * Проверяет, удовлетворяют ли ВСЕ элементы массива условию колбэка.
 * Останавливается при первом несоответствии.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция-предикат (element, index, array) => boolean
 * @returns {boolean} true если все элементы прошли проверку
 */
function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

/**
 * Последовательно обрабатывает элементы массива, накапливая результат
 * в аккумуляторе. Если initialValue не передан — первый элемент становится
 * аккумулятором. Если массив пустой и initialValue не передан — возвращает undefined.
 * @param {Array} array - Исходный массив
 * @param {Function} callback - Функция (accumulator, element, index, array)
 * @param {*} [initialValue] - Начальное значение аккумулятора (необязательно)
 * @returns {*} Итоговое значение аккумулятора
 */
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


// Примеры использования 

const nums = [1, 2, 3, 4, 5];

printArray(['a', 'b', 'c']);
// Element 0: value a
// Element 1: value b
// Element 2: value c

printArray1(['a', 'b', 'c']);
// 0:  a
// 1:  b
// 2:  c

forEach(nums, (el, i) => console.log(`Element: ${el}, Index: ${i}`));

const squared = map(nums, (el) => el * el);
console.log(squared); // [1, 4, 9, 16, 25]

const evens = filter(nums, (el) => el % 2 === 0);
console.log(evens); // [2, 4]

const firstEven = find(nums, (el) => el % 2 === 0);
console.log(firstEven); // 2

console.log(some(nums, (el) => el > 4)); // true
console.log(every([2, 4, 6], (el) => el % 2 === 0)); // true

const sum = reduce(nums, (acc, el) => acc + el, 0);
console.log(sum); // 15