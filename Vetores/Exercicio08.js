const ler = require("prompt-sync")();
let vetor = [];
let vetor2 = [];

for (let i = 0; i < 12; i++) {
	vetor.push(Number(ler("escreva um numero no vetor 1: ")));
	vetor2.push(Number(ler("escreva um numero no vetor 2: ")));
}
for (let i = 0; i < 12; i++) {
	if (vetor[i] == vetor2[i])
		console.log(
			`${vetor[i]} é um numero comum ao vetor 1 e 2 e está localizado no índice ${i}`
		);
}
