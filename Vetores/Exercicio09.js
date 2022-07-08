const ler = require("prompt-sync")();
let vetor = [];
let vetor2 = [];

for (let i = 0; i < 15; i++) {
	vetor.push(Number(ler("escreva um numero: ")));
}

uniqueVetor = vetor.filter((item, pos) => vetor.indexOf(item) == pos);

uniqueVetor.forEach((item) => {
	let posicao = "";
	let cont = 0;
	for (let j = 0; j < 15; j++) {
		if (item == vetor[j]) {
			cont++;
			posicao = posicao + " " + j;
		}
	}
	if (cont > 1) {
		vetor2.push({
			indices: posicao,
			numero: item,
			cont: cont,
		});
	}
});

for (let i = 0; i < vetor2.length; i++) {
	console.log(
		`Indices: ${vetor2[i].indices} | O número: ${vetor2[i].numero} repetiu ${vetor2[i].cont} vezes`
	);
}
