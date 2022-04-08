// 09 – Faça um algoritmo que leia três números inteiros positivos e imprima para o usuário os três números
// em ordem crescente.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));

if (num1 <= num2 && num1 <= num3) {
	console.log(`${num1}`);
	if (num2 <= num3) {
		console.log(`${num2}`);
		console.log(`${num3}`);
	} else {
		console.log(`${num3}`);
		console.log(`${num2}`);
	}
} else if (num2 <= num1 && num2 <= num3) {
	console.log(`${num2}`);
	if (num1 <= num3) {
		console.log(`${num1}`);
		console.log(`${num3}`);
	} else {
		console.log(`${num3}`);
		console.log(`${num1}`);
	}
} else if (num3 <= num1 && num3 <= num2) {
	console.log(`${num3}`);
	if (num1 <= num2) {
		console.log(`${num1}`);
		console.log(`${num2}`);
	} else {
		console.log(`${num2}`);
		console.log(`${num1}`);
	}
}
