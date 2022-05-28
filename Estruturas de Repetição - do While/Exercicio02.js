//Author: Dionata Claudinei Medeiros

const { ler, escrever } = require("./utils/utils");

let a = 0;
do {
	if (a % 2 == 0 && a % 3 == 0) {
		escrever("numero par e mutltiplos de 3 : " + a);
	}
	a++;
} while (a < 1000);
