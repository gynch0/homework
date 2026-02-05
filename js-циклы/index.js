// Задача 1.
// Напишите цикл, который выводит числа от 1 до 20, но пропускает те числа, которые делятся на 4 без остатка.
for (let i = 1; i <= 20; i++) {
	if (i % 4 === 0) continue;
	console.log(i);
}

let input = prompt("Факториал числа:", "");
if (input !== null) {
	let n = Number(input);
	if (!Number.isInteger(n) || n < 0) {
		alert("Введите неотрицательное целое число");
	} else {
		let factorial = 1;
		for (let j = 1; j <= n; j++) {
			factorial *= j;
		}
		alert(n + "! = " + factorial);
	}
}
