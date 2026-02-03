// Задача1
const firstName = "Egor";
const lastName = "Novikov";
const isStudent = true;

// Задача 2
const age = "22";
const currentYear = "2026";
const birthYear = Number(currentYear) - Number(age);
console.log(birthYear); // 2004
// Робот показал ,что я родился в 2004,хотя я родился в 2003,хэ-хэ Глюпая машыына,можем не переживать ,восстания не будет о.О

// Задача 3
console.log(
	"my name is " +
		firstName +
		" " +
		lastName +
		", to me " +
		age +
		" I am a student of the course - " +
		isStudent,
);
// Задача 4.

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;
console.log(result);

// 123+456+789+true+ false - ТО ,КАК Я ДУМАЛ

// 123456789falsetrue  - ПРАВИЛЬНЫЙ ОТВЕТ
