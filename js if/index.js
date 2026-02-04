// Задача 1
const dateОfBirth = "22";
if (dateОfBirth == 22 && dateОfBirth != 30) {
	console.log(dateОfBirth);
}

// Задача 2

const age = 22; //
const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(discount);

const AGE = 66;
switch (true) {
	case AGE < 18:
		console.log("10%");
		break;
	case AGE <= 65:
		console.log("20%");
		break;
	case AGE > 65:
		console.log("30%");
		break;
}

// Задача 3
const username = "admin";
const password = "123456";

if (username === "admin" && password === "123456") {
	console.log("Доступ разрешен");
} else {
	console.log("Доступ запрещён");
}

//  *Задача 4.

// let user = 65;
// let typeOfDelivery = "Premium";

// if (user <= 0) {
// 	console.log("Некорректный вес посылки");
// } else if (typeOfDelivery == "Экспресс") {
// 	console.log("Неверный тип доставки");
// } else if (user < 1) {
// 	console.log("5$");
// } else if (user <= 5) {
// 	console.log("10$");
// } else if (user < 5) {
// 	console.log("15$");
// }
