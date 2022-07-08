const ler = require("prompt-sync")();

let vetor = [];

for (let i = 0; i < 5; i++) {
	vetor.push(Number(ler("escreva um numero: ")));
}
let maior = 0;
let posicao = 0;
for (let i = 0; i < 5; i++) {
	if (maior < vetor[i]) {
		maior = vetor[i];
		posicao = i;
	}
}

console.log(`maior numero: ${maior} posição: ${posicao}`);
