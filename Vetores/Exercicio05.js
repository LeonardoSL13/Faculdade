const ler = require("prompt-sync")();
let vetor = [];
let vetor2 = [];
for (let i = 0; i < 5; i++) {
	vetor.push(ler("escreva um nome: "));
}

for (let i = 4; i >= 0; i--) {
	vetor2.push(vetor[i]);
}
console.log(`vetor 1: ${vetor} vetor 2: ${vetor2}`);
