"use strict";

// Задание 1.
// Дан массив пользователей:
// САМ
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// ГПТ
const getUserAverageAge = users => {
	if (!Array.isArray(users) || users.length === 0) return 0;

	const validAges = users
		.map(u => Number(u.age))
		.filter(age => !Number.isNaN(age));

	if (validAges.length === 0) return 0;

	const sum = validAges.reduce((s, a) => s + a, 0);
	return sum / validAges.length;
};

console.log(getUserAverageAge(users)); // выведет средний возраст

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
// ГПТ
function getAdminNames(users) {
	if (!Array.isArray(users)) return [];
	return users.filter(u => u && u.isAdmin).map(u => u.name);
}
console.log(getAllAdmins(users));

// / Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

// ПОПЫТАЛСЯ САМ ,НО ЧТО ТО ВСЁ ЧЕРЕЗ ЖОПУ
// const first = (arr, n) => {
// 	if (n == 0) return [arr[""]];
// 	else if (n == undefined) {
// 		return [arr[0]];
// 	}
// };
