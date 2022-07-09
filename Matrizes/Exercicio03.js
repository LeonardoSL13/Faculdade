// 03 – Faça um algoritmo que leia uma matriz 3x3 onde seu conteúdo serão nomes. Depois de ter a matriz
// preenchida, peça para o usuário digitar um nome e procure-o na matriz, caso seja encontrado mostre ao
// usuário a linha e a coluna em que se encontra, caso contrário mostre uma mensagem informando ao
// usuário de que o nome não foi localizado. Importante: Não será permitida a digitação de nomes repetidos
// no momento de ler a matriz.

const prompt = require("prompt-sync")();

let matriz = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		let found = false;
		do {
			found = false;
			let name = prompt(`Digite um nome: `);
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (matriz[i][j] == name) {
						found = true;
					}
				}
			}
			if (!found) {
				matriz[i][j] = name;
			}
		} while (found);
	}
}
let name = prompt("Digite um nome para procurar na matriz: ");
let found = false;
for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
		if (matriz[i][j] === name) {
			console.log(`O nome ${name} está na linha ${i} e na coluna ${j}`);
			found = true;
		}
	}
}
if (!found) {
	console.log(`O nome ${name} não foi localizado`);
}
