// 07 – Construa um algoritmo que leia três números diferentes e imprima o menor deles.

const prompt = require("prompt-sync")();

let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");
let num3 = prompt("Digite o terceiro número: ");

if (num1 < num2 && num1 < num3) {
	console.log(`O menor número é ${num1}`);
} else if (num2 < num1 && num2 < num3) {
	console.log(`O menor número é ${num2}`);
} else if (num3 < num1 && num3 < num2) {
	console.log(`O menor número é ${num3}`);
} else {
	console.log("dois números ou mais são iguais.");
}
