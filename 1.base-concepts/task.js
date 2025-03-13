"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {} else if (discriminant == 0) {
		arr.push(-b / (2 * a));
	} else if (discriminant > 0) {
		arr.push(
			(-b + Math.sqrt(discriminant)) / (2 * a),
			(-b - Math.sqrt(discriminant)) / (2 * a)
		);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthPercent = percent / 100 / 12;
	let change = amount - contribution;
	let monthPay =
		change *
		(monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));
	let AllPayments = Number((monthPay * countMonths).toFixed(2));
	return AllPayments;
}