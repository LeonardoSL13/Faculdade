// 04 – Construa um algoritmo que leia um número inteiro e mostre ao usuário uma (ou mais) mensagem
// informativa de acordo com cada condição abaixo:
// O número informado é igual a zero
// O número informado é negativo
// O número informado é positivo
const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número inteiro: "));

if (num == 0) {
	console.log("O número informado é igual a zero.");
} else if (num < 0) {
	console.log("O número informado é negativo.");
} else if (num > 0) {
	console.log("O número informado é positivo.");
}
