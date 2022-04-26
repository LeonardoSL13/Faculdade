// 10 – Crie um algoritmo que calcule quantos dias uma pessoa já viveu até (inclusive) o dia 31/12/2021. Para
// isso vamos assumir que todos os meses possuem 30 dias.

const prompt = require("prompt-sync")();

const diaNascimento = parseInt(prompt("Digite o dia de nascimento: "));
const mesNascimento = parseInt(prompt("Digite o mês de nascimento: "));
const anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));

const totalDias =
	30 * (12 - mesNascimento) +
	(30 - diaNascimento) +
	(2020 - anoNascimento) * 360 +
	1;

console.log(`Você já viveu ${totalDias} dias.`);
