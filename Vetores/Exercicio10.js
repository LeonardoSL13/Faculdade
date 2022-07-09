const ler = require("prompt-sync")();

let vetor = ["|", "|", "|", "|", "|", "|", "|", "|", "|", "|"];
let rep = true;

while (rep) {
	console.log(`
    – Digite “1” para incluir novos nomes.
    – Digite “2” para excluir um nome.
    – Digite “3” para listar os nomes em ordem crescente.
    – Digite “4” para listar os nomes em ordem decrescente.
    - Digite "5" para finalizar a ação.
    `);
	let opcao = Number(ler("Digite uma opção: "));
	let nome = "";
	switch (opcao) {
		case 1:
			let vet = false;
			for (let a = 0; a < vetor.length; a++) {
				if (vetor[a] == "|") {
					vet = true;
				}
			}
			if (vet) {
				nome = ler("Digite nome: ");
				for (let b = 0; b < vetor.length; b++) {
					if (vetor[b] == "|") {
						vetor[b] = nome;
						b = vetor.length;
					}
				}
			} else {
				console.log(
					"- É necessario excluir um nome, para poder adicionar um novo."
				);
			}
			console.log("vetor: " + vetor);
			vet = false;
			break;
		case 2:
			for (let c = 0; c < vetor.length; c++) {
				console.log("Posição: " + c + " Nome: " + vetor[c]);
			}
			let posicao = Number(ler("Qual posição dejesa excluir: "));
			if (vetor[posicao] == "|") {
				console.log("Não existe um nome para ser removido! ");
			} else {
				vetor[posicao] = "|";
			}
			console.log("Nomes: " + vetor);
			break;
		case 3:
			vetor.sort();
			console.log("Nomes em ordem crescente: " + vetor);
			break;
		case 4:
			vetor.sort((a, b) => {
				if (a > b) {
					return -1;
				}
				if (a < b) {
					return 1;
				}
				return 0;
			});
			console.log("Nomes em ordem decrecente: " + vetor);
			break;
		case 5:
			console.log("Ação finalizada!");
			rep = false;
			break;
	}
}
