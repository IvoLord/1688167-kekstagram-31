// Напиши программу, которая будет рассчитывать сумму покупки с учётом скидки.

// Стоимость записана в переменную price.

// Если стоимость покупки от 1000 (включительно) до 3000 (не включая это значение), скидка составляет 5%.

// Если стоимость покупки от 3000 (включительно) до 5000 (не включая это значение), скидка 10%.

// Если стоимость покупки от 5000 (включительно) и выше, скидка 15%.

// В остальных случаях скидки для покупателей нет.

// Вычисляй стоимость с учётом скидки и записывай результат в переменную discountedPrice.

const PRICE = 5000;

function getSalePrice(price) {
	let salePrice;
	let sale = 0;

	if (price >= 5000) {
		sale = 0.15;
	} else if (price >= 3000) {
		sale = 0.1;
	} else if (price >= 1000) {
		sale = 0.05;
	}

	return (salePrice = price - price * sale);
}

let discountedPrice = getSalePrice(PRICE);

// console.log("test getSale:", getSalePrice(PRICE));

// ─────  ─────

let number = 123;
let quantity = getQuantityNamber(number);

function getQuantityNamber(num) {
	return num.toString().length;
}
console.log("test  getQuantityNamber: ");

/* Техническое задание

Напиши программу, которая определяет сколько цифр в одном числе.

Само число записано в переменную number.

Найди количество цифр в этом числе и запиши результат в переменную quantity.

*/
