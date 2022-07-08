// 04 – Faça um algoritmo que lê uma matriz 4x4 de números inteiros e mostre ao usuário as seguintes
// opções:

// “1” – Digite o índice da coluna que deseja verificar o total da soma dos seus elementos.
// “2” - Digite o índice da linha que deseja verificar o total da soma dos seus elementos.
// “3” – Digite o índice da linha e da coluna para saber qual elemento ocupa essa posição.
// “4” – Calcular a soma dos elementos da diagonal principal.
// “5” – Calcular a soma dos elementos da diagonal secundária.

const prompt = require("prompt-sync")();

let matriz = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
];

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		matriz[i][j] = prompt(`Digite um número: `);
	}
}

function sumCol(matriz, col) {
	let sum = 0;
	for (let i = 0; i < 4; i++) {
		sum += Number(matriz[i][col]);
	}
	return sum;
}

function sumRow(matriz, row) {
	let sum = 0;
	for (let i = 0; i < 4; i++) {
		sum += Number(matriz[row][i]);
	}
	return sum;
}

function sumDiag(matriz) {
	let sum = 0;
	for (let i = 0; i < 4; i++) {
		sum += Number(matriz[i][i]);
	}
	return sum;
}

function sumDiagSec(matriz) {
	let sum = 0;
	for (let i = 0; i < 4; i++) {
		sum += Number(matriz[i][3 - i]);
	}
	return sum;
}

let option = prompt(`
Digite uma opção:
1 - Soma da coluna
2 - Soma da linha
3 - Elemento na posição
4 - Soma da diagonal principal
5 - Soma da diagonal secundária`);

let col = 0;
let row = 0;

switch (option) {
	case "1":
		col = parseInt(prompt("Digite o índice da coluna: "));
		console.log(sumCol(matriz, col));
		break;
	case "2":
		row = parseInt(prompt("Digite o índice da linha: "));
		console.log(sumRow(matriz, row));
		break;
	case "3":
		row = parseInt(prompt("Digite o índice da linha: "));
		col = parseInt(prompt("Digite o índice da coluna: "));
		console.log(matriz[row][col]);
		break;
	case "4":
		console.log(sumDiag(matriz));
		break;
	case "5":
		console.log(sumDiagSec(matriz));
		break;
	default:
		console.log("Opção inválida");
}

console.log(matriz);
