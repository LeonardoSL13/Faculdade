//Author: Leonardo dos Santos Lopes

const prompt = require("prompt-sync")();

let qntAlunos = prompt("Digite a quantidade de alunos: ");

let contador = 1;
let totalNotas = 0;
let qntAprovados = 0;

do {
	const nota1 = Number(
		prompt(`digite a primeira nota do aluno(${contador}): `)
	);
	const nota2 = Number(prompt(`digite a segunda nota do aluno(${contador}): `));
	totalNotas += (nota1 + nota2) / 2;
	if ((nota1 + nota2) / 2 >= 7) {
		qntAprovados++;
	}

	contador++;
} while (contador <= qntAlunos);

console.log(`
 1 – A média da turma: ${totalNotas / qntAlunos}
 2 – A quantia de alunos aprovados: ${qntAprovados}
 3 – A quantia de alunos reprovados: ${qntAlunos - qntAprovados}
`);
