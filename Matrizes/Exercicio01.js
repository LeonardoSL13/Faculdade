const prompt = require("prompt-sync")();

matrizA = [
	[0, 0],
	[0, 0],
];

matrizB = [
	[0, 0],
	[0, 0],
];

function lerMatriz(matriz) {
	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz[i].length; j++) {
			matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}][${j}]: `));
		}
	}
}

function somar(matrizA, matrizB) {
	let resultado = [];
	for (let i = 0; i < 2; i++) {
		resultado[i] = [];
		for (let j = 0; j < 2; j++) {
			resultado[i][j] = matrizA[i][j] + matrizB[i][j];
		}
	}
	return resultado;
}

function subtrair(matrizA, matrizB) {
	let resultado = [];
	for (let i = 0; i < 2; i++) {
		resultado[i] = [];
		for (let j = 0; j < 2; j++) {
			resultado[i][j] = matrizA[i][j] - matrizB[i][j];
		}
	}
	return resultado;
}

function multiplicar(matrizA, matrizB) {
	let resultado = [];
	for (let i = 0; i < 2; i++) {
		resultado[i] = [];
		for (let j = 0; j < 2; j++) {
			resultado[i][j] = matrizA[i][j] * matrizB[i][j];
		}
	}
	return resultado;
}

function dividir(matrizA, matrizB) {
	let resultado = [];
	for (let i = 0; i < 2; i++) {
		resultado[i] = [];
		for (let j = 0; j < 2; j++) {
			resultado[i][j] = matrizA[i][j] / matrizB[i][j];
		}
	}
	return resultado;
}

function divisibilidade(matrizA, matrizB) {
	let resultado = [];
	for (let i = 0; i < 2; i++) {
		resultado[i] = [];

		for (let j = 0; j < 2; j++) {
			if (matrizA[i][j] % matrizB[i][j] == 0) {
				resultado[i][j] = true;
			} else {
				resultado[i][j] = false;
			}
		}
	}
	return resultado;
}

console.log("Digite a matriz A: ");
lerMatriz(matrizA);
console.log("Digite a matriz B: ");
lerMatriz(matrizB);

console.log("Soma: ");
somar(matrizA, matrizB).forEach((element) => {
	console.log(element);
});

console.log("Subtração: ");
subtrair(matrizA, matrizB).forEach((element) => {
	console.log(element);
});
console.log("Multiplicação: ");
multiplicar(matrizA, matrizB).forEach((element) => {
	console.log(element);
});
console.log("Divisão: ");
dividir(matrizA, matrizB).forEach((element) => {
	console.log(element);
});
console.log("Divisibilidade: ");
divisibilidade(matrizA, matrizB).forEach((element) => {
	console.log(element);
});
