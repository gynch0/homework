// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// const theBasePrice = 1000;
// const discount = 45;
// const tax = 15;
// function calculateFinalPrice(theBasePrice, discount, tax) {
// 	const ofTheFunction = (discount / 100) * theBasePrice;
// 	const addAPercentage = theBasePrice + (theBasePrice * tax) / 100;
// 	console.log(ofTheFunction + addAPercentage);
// }
// ЭТО ТО ,ДО ЧЕГО Я САМ ДОДУМАЛСЯ ,НО ОНО НЕ ЗАРАБОТАЛО

// ПОМОГАЛ ГПТ
function calculateFinalPrice(basePrice, discount, tax) {
	if (
		typeof basePrice !== "number" ||
		typeof discount !== "number" ||
		typeof tax !== "number"
	) {
		throw new TypeError("Все аргументы должны быть числами");
	}
	if (basePrice < 0 || discount < 0 || tax < 0) {
		throw new RangeError("Аргументы не должны быть отрицательными");
	}

	const priceAfterDiscount = basePrice * (1 - discount / 100);
	const finalPrice = priceAfterDiscount * (1 + tax / 100);
	return Number(finalPrice.toFixed(2)); // возвращаем число, округлённое до 2 знаков
}
const theBasePrice = 1000;
const discount = 45;
const tax = 15;
console.log(calculateFinalPrice(theBasePrice, discount, tax));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
// const user = admin;
// const password = "123456";

function checkAccess(user, password) {
	if (user === "admin" && password === "123456") {
		console.log("Доступ разрешен ");
		return;
	} else {
		console.log("Доступ запрещён");
	}
}
// СДЕЛАЛ САМ
checkAccess("admin", "123456");

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// ПОПЫТАЛСЯ САМ
// function getTimeOfDay(hour) {
// 	if (hour >= 0 && hour <= 5) {
// 		return "ночь";
// 	} else if (hour >= 6 && hour <= 11) {
// 		return "утро";
// 	} else if (hour >= 12 && hour <= 17) {
// 		return "день";
// 	} else {
// 		return "вечер";
// 	}
// }
// console.log(prompt(getTimeOfDay("")));

// ПОМОГ ГПТ
function getTimeOfDay(hour) {
	if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
		return "Некорректное время";
	}
	if (hour <= 5) return "Ночь";
	if (hour <= 11) return "Утро";
	if (hour <= 17) return "День";
	return "Вечер";
}

// Примеры
console.log(getTimeOfDay(0)); // "Ночь"
console.log(getTimeOfDay(9)); // "Утро"
console.log(getTimeOfDay(14)); // "День"
console.log(getTimeOfDay(20)); // "Вечер"
console.log(getTimeOfDay(24)); // "Некорректное время"

const input = prompt("Введите час (0–23):");
if (input !== null) {
	console.log(getTimeOfDay(Number(input.trim())));
}

// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// function findFirstEven (start,end){
//   if(findFirstEven =%)

// }
// findFirstEven(2,5)

// Что то я её вообще не смог решить ,тупо копировать из гпт ,не хочу
