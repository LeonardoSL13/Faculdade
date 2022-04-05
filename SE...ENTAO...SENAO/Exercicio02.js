//02 – Crie um algoritmo que leia dois números inteiro e mostre qual é o menor dos dois.
const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

if (num1 > num2) {
	console.log(`o ${num2} é o menor número.`);
} else if (num1 < num2) {
	console.log(`o ${num1} é o menor número.`);
} else {
	console.log("Os dois números são iguais.");
}
