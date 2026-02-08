// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	firstName: "Egor",
	lastName: "Novikov",
	age: 22,
};
console.log(person);

// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// ДЕЛАЛ САМ
// let obj = {};

// function isEmpty(obj) {
// 	if (obj === undefined) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(isEmpty[obj]);

// ГПТ
function isEmpty(obj) {
	if (obj == null) return true; // опционально: считать null/undefined "пустыми"
	for (var key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			return false;
		}
	}
	return true;
}
const a = {};
console.log(isEmpty(a)); // true

// true — унаследованные свойства не считаются
// function isEmpty(obj) {
//   if (obj == null) return true; // по желанию: считать null/undefined пустыми
//   for (let key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       return false;
//     }
//   }
//   return true;
// }

// Примеры:
// console.log(isEmpty({}));        // true
// console.log(isEmpty({ a: 1 }));  // false
// console.log(isEmpty(Object.create({x: 1}))); // true — унаследованные свойства не считаются

// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.


// cам
// const task = {
// 	title: "Техника",
// 	description: "запчасти",
// 	isCompleted: "true",
// };


// function cloneAndModify(object, modifications)



// ИИ
function cloneAndModify(object = {}, modifications = {}) {
  const base = object || {};
  const mods = modifications || {};
  return { ...base, ...mods };
}

Примеры использования:

const task = {
  title: 'Купить продукты',
  description: 'Молоко, хлеб, яйца',
  isCompleted: false
};

const newTask = cloneAndModify(task, { isCompleted: true, title: 'Купить молоко' });

console.log(task.isCompleted); // false — оригинал не изменён
console.log(newTask.isCompleted); // true — в копии применены изменения