//03 – Faça um algoritmo que leia um número inteiro de 1 a 12 e mostre o seu mês equivalente,
//seguindo a tabela abaixo:
//Número 	Mês
// 1 			Janeiro
// 2 			Fevereiro
// 3 			Março
// 4 			Abril
// 5			Maio
// 6			Junho
// 7 			Julho
// 8 			Agosto
// 9 			Setembro
// 10 		Outubro
// 11 		Novembro
// 12 		Dezembro

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número de 1 a 12: "));

if (num == 1) {
	console.log("Janeiro");
} else if (num == 2) {
	console.log("Fevereiro");
} else if (num == 3) {
	console.log("Março");
} else if (num == 4) {
	console.log("Abril");
} else if (num == 5) {
	console.log("Maio");
} else if (num == 6) {
	console.log("Junho");
} else if (num == 7) {
	console.log("Julho");
} else if (num == 8) {
	console.log("Agosto");
} else if (num == 9) {
	console.log("Setembro");
} else if (num == 10) {
	console.log("Outubro");
} else if (num == 11) {
	console.log("Novembro");
} else if (num == 12) {
	console.log("Dezembro");
} else {
	console.log("Número inválido");
}
