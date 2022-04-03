// 05 – Dada que existam as seguintes condições para entrar em uma festa:

// 1. Você precisa ser maior de 18 anos
// 2. Você precisa ter mais de 1.50 metros de altura
// 3. Você precisa estar vestido(a) com uma camiseta laranja

// Construa um algoritmo que leia a idade, altura e cor da camiseta e então verifique se todas as condições
// foram atendidas, em caso afirmativo, exibir a seguinte mensagem: “Entrada liberada, divirta-se :)”, caso
// uma, ou mais condições forem falsas, mostre o valor que foi informado pelo usuário para a condição em
// questão e o valor necessário para entrar.

const prompt = require("prompt-sync")();

const idade = prompt("Digite sua idade: ");
const altura = prompt("Digite sua altura(em metros): ");
const cor = prompt("Digite a cor da camiseta: ");

if (idade >= 18 && altura >= 1.5 && cor == "laranja") {
	console.log("Entrada liberada, divirta-se :)");
} else {
	if (idade < 18) {
		console.log(
			`você tem ${idade} anos, você precisa ter mais de 18 anos para entrar.`
		);
	}
	if (altura < 1.5) {
		console.log(
			`você tem ${altura} de altura, você precisa ter mais de 1.50 metros de altura para entrar.`
		);
	}
	if (cor != "laranja") {
		console.log(
			`Você esta vestido(a) com uma camiseta ${cor}, você precisa estar com uma camiseta laranja para entrar.`
		);
	}
	console.log("Entrada não permitida =[");
}
