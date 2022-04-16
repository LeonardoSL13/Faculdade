// 06 – Dada que existam as seguintes condições para andar na montanha russa do Hulk:

// 1. Você precisa ter resistência
// 2. Você precisa ter coragem

// Construa um algoritmo que leia coragem e a resistência do cidadão e então verifique se ao menos uma das
// condições foram atendidas, em caso afirmativo, exibir a seguinte mensagem: “Entrada liberada, divirta-se
// :)”. Mostrar também quais condições fizeram com que você entrasse, caso ambas forem falsas, mostrar a
// seguinte mensagem “Entrada não permitida =[“

const prompt = require("prompt-sync")();

let coragem = prompt("você tem coraguem: ");
let resistencia = prompt("você tem resistencia: ");

if (coragem == "sim" || resistencia == "sim") {
	if (coragem == "sim") {
		console.log("Você tem a coragem nessecaria para entrar");
	}
	if (resistencia == "sim") {
		console.log("Você tem a resistencia nessecaria para entrar");
	}
	console.log("Entrada liberada, divirta-se :)");
} else {
	console.log("Entrada não permitida =[");
}
