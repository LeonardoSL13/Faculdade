// 02 – Faça um algoritmo que leia uma matriz 4x2 de números inteiros. Após preencher toda a matriz,
// mostre a soma de seus elementos.

const prompt = require("prompt-sync")();

matriz = [
	[0, 0],
	[0, 0],
	[0, 0],
	[0, 0],
];

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 2; j++) {
		matriz[i][j] = Number(prompt(`Digite um número: `));
	}
}

let sum = 0;
for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 2; j++) {
		sum += matriz[i][j];
	}
}
console.log(`a soma dos elementos é ${sum}`);
