// Author: Diego Bonfati de Siquera

const { ler, escrever } = require("./utils/utils");

let arthur = 1.5;
let maciel = 1.1;
let anoArthur = 0;
let anoMaciel = 0;
let vencedor = 0;

escrever("Façam suas apostas!\nQuantos anos Maciel irá passar Arthur?\n");
let ano = ler("Digite sua aposta: ");

escrever("Quantos anos cada um deles levaria para chegar a 1,90m de altura\n");
let apostaArthur = ler("Quantos anos Arthur chega em 1,90CM? ");
let apostaMaciel = ler("Quantos anos Maciel chega em 1,90CM? ");

do {
	arthur += 0.06;
	anoArthur += 1;
} while (arthur <= 1.9);

do {
	maciel += 0.1;
	anoMaciel += 1;
} while (maciel <= 1.9);

if (maciel > arthur) vencedor = anoMaciel;

if (ano == anoMaciel) {
	escrever(
		"\nParabéns Você acertou!!\nMaciel passou Arthur com " +
			anoMaciel +
			" anos."
	);
} else {
	escrever("\nVocê errou!\nMaciel passou Arthur com " + anoMaciel + " anos.");
}

if (apostaArthur == anoArthur) {
	escrever(
		"\nParabéns Você acertou!!\nArthur chegou a 1,90CM, com " +
			anoArthur +
			" anos."
	);
} else {
	escrever(
		"\nVocê errou!\nArthur chegou a 1,90CM, com " + anoArthur + " anos."
	);
}
if (apostaMaciel == anoMaciel) {
	escrever(
		"\nParabéns Você acertou!!\nMaciel chegou a 1,90CM, com " +
			anoMaciel +
			" anos."
	);
} else {
	escrever(
		"\nVocê errou!\nMaciel chegou a 1,90CM, com " + anoMaciel + " anos."
	);
}

if (ano != anoMaciel && apostaArthur != anoArthur && apostaMaciel != anoMaciel)
	escrever("\nVocês erraram todas as suas apostas =).\n");
if (ano == anoMaciel && apostaArthur == anoArthur && apostaMaciel == anoMaciel)
	escrever(
		"\nParabéns!!\nVocê acertou todas as apostas.\nReceba seu premio :D\n"
	);
