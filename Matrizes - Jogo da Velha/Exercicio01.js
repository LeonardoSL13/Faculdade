const prompt = require("prompt-sync")();

let tabuleiro = [
	["1", "2", "3"],
	["4", "5", "6"],
	["7", "8", "9"],
];

function EscreverTabuleiro() {
	const red = "\u001b[31m";
	const blue = "\u001b[34m";
	const reset = "\u001b[0m";
	console.log(`
 ${
		tabuleiro[0][0] == "X"
			? red + tabuleiro[0][0] + reset
			: tabuleiro[0][0] == "O"
			? blue + tabuleiro[0][0] + reset
			: tabuleiro[0][0]
 } │ ${
		tabuleiro[0][1] == "X"
			? red + tabuleiro[0][1] + reset
			: tabuleiro[0][1] == "O"
			? blue + tabuleiro[0][1] + reset
			: tabuleiro[0][1]
	} │ ${
		tabuleiro[0][2] == "X"
			? red + tabuleiro[0][2] + reset
			: tabuleiro[0][2] == "O"
			? blue + tabuleiro[0][2] + reset
			: tabuleiro[0][2]
	}
───┼───┼───
 ${
		tabuleiro[1][0] == "X"
			? red + tabuleiro[1][0] + reset
			: tabuleiro[1][0] == "O"
			? blue + tabuleiro[1][0] + reset
			: tabuleiro[1][0]
 } │ ${
		tabuleiro[1][1] == "X"
			? red + tabuleiro[1][1] + reset
			: tabuleiro[1][1] == "O"
			? blue + tabuleiro[1][1] + reset
			: tabuleiro[1][1]
	} │ ${
		tabuleiro[1][2] == "X"
			? red + tabuleiro[1][2] + reset
			: tabuleiro[1][2] == "O"
			? blue + tabuleiro[1][2] + reset
			: tabuleiro[1][2]
	}
───┼───┼───
 ${
		tabuleiro[2][0] == "X"
			? red + tabuleiro[2][0] + reset
			: tabuleiro[2][0] == "O"
			? blue + tabuleiro[2][0] + reset
			: tabuleiro[2][0]
 } │ ${
		tabuleiro[2][1] == "X"
			? red + tabuleiro[2][1] + reset
			: tabuleiro[2][1] == "O"
			? blue + tabuleiro[2][1] + reset
			: tabuleiro[2][1]
	} │ ${
		tabuleiro[2][2] == "X"
			? red + tabuleiro[2][2] + reset
			: tabuleiro[2][2] == "O"
			? blue + tabuleiro[2][2] + reset
			: tabuleiro[2][2]
	}
  `);
}

function verificaVencedor() {
	if (
		tabuleiro[0][0] == "X" &&
		tabuleiro[0][1] == "X" &&
		tabuleiro[0][2] == "X"
	) {
		return true;
	} else if (
		tabuleiro[1][0] == "X" &&
		tabuleiro[1][1] == "X" &&
		tabuleiro[1][2] == "X"
	) {
		return true;
	} else if (
		tabuleiro[2][0] == "X" &&
		tabuleiro[2][1] == "X" &&
		tabuleiro[2][2] == "X"
	) {
		return true;
	} else if (
		tabuleiro[0][0] == "X" &&
		tabuleiro[1][0] == "X" &&
		tabuleiro[2][0] == "X"
	) {
		return true;
	} else if (
		tabuleiro[0][1] == "X" &&
		tabuleiro[1][1] == "X" &&
		tabuleiro[2][1] == "X"
	) {
		return true;
	} else if (
		tabuleiro[0][2] == "X" &&
		tabuleiro[1][2] == "X" &&
		tabuleiro[2][2] == "X"
	) {
		return true;
	} else if (
		tabuleiro[0][0] == "X" &&
		tabuleiro[1][1] == "X" &&
		tabuleiro[2][2] == "X"
	) {
		return true;
	} else if (
		tabuleiro[0][2] == "X" &&
		tabuleiro[1][1] == "X" &&
		tabuleiro[2][0] == "X"
	) {
		return true;
	} else if (
		tabuleiro[0][0] == "O" &&
		tabuleiro[0][1] == "O" &&
		tabuleiro[0][2] == "O"
	) {
		return true;
	} else if (
		tabuleiro[1][0] == "O" &&
		tabuleiro[1][1] == "O" &&
		tabuleiro[1][2] == "O"
	) {
		return true;
	} else if (
		tabuleiro[2][0] == "O" &&
		tabuleiro[2][1] == "O" &&
		tabuleiro[2][2] == "O"
	) {
		return true;
	} else if (
		tabuleiro[0][0] == "O" &&
		tabuleiro[1][0] == "O" &&
		tabuleiro[2][0] == "O"
	) {
		return true;
	} else if (
		tabuleiro[0][1] == "O" &&
		tabuleiro[1][1] == "O" &&
		tabuleiro[2][1] == "O"
	) {
		return true;
	} else if (
		tabuleiro[0][2] == "O" &&
		tabuleiro[1][2] == "O" &&
		tabuleiro[2][2] == "O"
	) {
		return true;
	} else if (
		tabuleiro[0][0] == "O" &&
		tabuleiro[1][1] == "O" &&
		tabuleiro[2][2] == "O"
	) {
		return true;
	} else if (
		tabuleiro[0][2] == "O" &&
		tabuleiro[1][1] == "O" &&
		tabuleiro[2][0] == "O"
	) {
		return true;
	} else {
		return false;
	}
}

function jogadaValida(jogada) {
	if (jogada == "1" && tabuleiro[0][0] == "1") {
		return true;
	} else if (jogada == "2" && tabuleiro[0][1] == "2") {
		return true;
	} else if (jogada == "3" && tabuleiro[0][2] == "3") {
		return true;
	} else if (jogada == "4" && tabuleiro[1][0] == "4") {
		return true;
	} else if (jogada == "5" && tabuleiro[1][1] == "5") {
		return true;
	} else if (jogada == "6" && tabuleiro[1][2] == "6") {
		return true;
	} else if (jogada == "7" && tabuleiro[2][0] == "7") {
		return true;
	} else if (jogada == "8" && tabuleiro[2][1] == "8") {
		return true;
	} else if (jogada == "9" && tabuleiro[2][2] == "9") {
		return true;
	} else {
		return false;
	}
}

function jogar() {
	let rodada = 0;
	while (rodada < 9) {
		EscreverTabuleiro();
		let jogada = prompt(`${jogador}, digite uma jogada: `);

		if (jogadaValida(jogada)) {
			rodada++;

			if (jogada == "1") {
				tabuleiro[0][0] = jogador;
			} else if (jogada == "2") {
				tabuleiro[0][1] = jogador;
			} else if (jogada == "3") {
				tabuleiro[0][2] = jogador;
			} else if (jogada == "4") {
				tabuleiro[1][0] = jogador;
			} else if (jogada == "5") {
				tabuleiro[1][1] = jogador;
			} else if (jogada == "6") {
				tabuleiro[1][2] = jogador;
			} else if (jogada == "7") {
				tabuleiro[2][0] = jogador;
			} else if (jogada == "8") {
				tabuleiro[2][1] = jogador;
			} else if (jogada == "9") {
				tabuleiro[2][2] = jogador;
			}

			if (verificaVencedor()) {
				console.clear();
				EscreverTabuleiro();
				console.log(`${jogador} venceu!`);
				break;
			}

			if (jogador == "X") {
				console.clear();
				jogador = "O";
			} else {
				console.clear();
				jogador = "X";
			}
		} else {
			console.clear();
			console.log("Jogada inválida!");
		}
	}

	if (rodada == 9 && !verificaVencedor()) {
		console.clear();
		EscreverTabuleiro();
		console.log("Deu velha!");
	}
}

let jogador = "";
while (jogador != "X" && jogador != "O") {
	jogador = prompt("primeiro jogador: X ou O? ").toUpperCase();
}

jogar();
