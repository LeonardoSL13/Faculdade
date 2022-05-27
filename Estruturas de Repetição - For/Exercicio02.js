//02 – Faça um algoritmo que leia dois números, maiores que zero e menores que 11. Os dois números lidos
//precisam ser diferentes. Uma vez tendo feito a leitura desses números, utilizando a instrução Para, mostre
//os números entre 1 e 1000 que sejam múltiplos tanto do primeiro número lido quanto do segundo.

const promp = require("prompt-sync")();

let num1 = 0;
let num2 = 0;
while (num1 == num2) {
	num1 = 0;
	num2 = 0;
	while (num1 <= 0 || num1 >= 10) {
		num1 = Number(promp("digite um numero entre 1 - 10: "));
		if (num1 <= 0 || num1 >= 10)
			console.log("os números tem que ser entre 1 e 10");
	}
	while (num2 <= 0 || num2 >= 10) {
		num2 = Number(promp("digite outro numero entre 1 - 10: "));
		if (num2 <= 0 || num2 >= 10)
			console.log("os números tem que ser entre 1 e 10");
	}
	if (num1 == num2) console.log("os números n podem ser iguais");
}

for (let i = 1; i <= 1000; i++) {
	if (i % num1 == 0 && i % num2 == 0) {
		console.log(i);
	}
}
