//Author: Leonardo dos Santos Lopes

const prompt = require("prompt-sync")();

let n = Number(prompt("Digite o valor de N: "));
console.log(fibonacci(n));

function fibonacci(n) {
	let sequencia = [0, 1];
	let i = 0;
	do {
		sequencia.push(sequencia[i] + sequencia[i + 1]);
		i++;
	} while (i < n - 2);
	return sequencia[n];
}
