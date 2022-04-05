//01 – Faça um algoritmo que leia dois números inteiros e mostre qual é o maior dos dois.
const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));

if (num1 > num2) {
	console.log(`o ${num1} é o maior número.`);
} else if (num1 < num2) {
	console.log(`o ${num2} é o maior número.`);
} else {
	console.log("Os dois números são iguais.");
}
