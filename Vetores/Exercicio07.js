const ler = require("prompt-sync")();
let vetor = [];

for (let i = 0; i < 10; i++) {
	vetor.push(Number(ler("escreva um numero: ")));
}
console.log(vetor.sort((a, b) => a - b));
let posicao = 0;
let numero = Number(ler("Digite mais um numero: "));
for (let i = 0; i < 10; i++) {
	if (numero < vetor[i] && numero > vetor[i - 1]) {
		posicao = i;
		break;
	}
}

vetor.splice(posicao, 0, numero);

console.log(vetor);
