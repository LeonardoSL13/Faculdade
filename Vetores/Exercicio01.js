const ler = require("prompt-sync")();
let vetor = [];

for (let i = 0; i < 5; i++) {
	vetor.push(Number(ler("escreva um numero: ")));
}

console.log(vetor);
