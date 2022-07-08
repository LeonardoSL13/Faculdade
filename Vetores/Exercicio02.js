const ler = require("prompt-sync")();
let vetor = [];

for (let i = 0; i < 10; i++) {
	vetor.push(Number(ler("escreva um numero: ")));
}
for (let i = 9; i >= 0; i--) {
	console.log(vetor[i]);
}
