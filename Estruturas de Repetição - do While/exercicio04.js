//Author: Kailane Bonfati de camargo

const { ler, escrever } = require("./utils/utils");

let iteracao = 1;

do {
	let contador = iteracao;
	let soma = 0;
	do {
		soma += contador;
		escrever(`Iteração ${iteracao} número ${contador} = ${soma}`);
		contador++;
	} while (contador <= 10);
	iteracao++;
} while (iteracao <= 10);
