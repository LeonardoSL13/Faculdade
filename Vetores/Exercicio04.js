const ler = require("prompt-sync")();
let vetor = [];

for (let i = 0; i < 10; i++) {
	let numero = Number(ler("escreva um numero: "));
	if (!vetor.includes(numero)) {
		vetor.push(numero);
	} else {
		console.log(`
    Error 1505(duplicatade data)  
    numeros digitados: ${vetor}
    
    Por favor digite um numero diferente:`);
		i--;
	}
}

console.log(vetor);
