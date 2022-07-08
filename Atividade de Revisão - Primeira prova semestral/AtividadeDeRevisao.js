const prompt = require("prompt-sync")();

const sanduiche = {
	pao: "",
	qntPao: 1,
	proteina: "",
	qntProteina: 1,
	adicional: "",
	qntAdicional: 1,
	queijo: "",
	qntQueijo: 1,
	vegetal: "",
	qntVegetal: 1,
	molho: "",
	qntMolho: 1,
	tamanho: "normal",
	precoFinal: 0,
	aniversario: false,
	viajem: false,
	voucher: 1,

	setPao() {
		console.log(` 
		1 - 3 Queijos
		2 - parmesão e orégano
		3 - 9 grãos
		4 - Italiano Branco(Origem Vegetal)
		5 - Granola Salgada
		6 - Manteiga Temperada
		 `);
		const opcao = Number(prompt(`escolha o tipo de pão: `));
		switch (opcao) {
			case 1:
				this.pao = "3 Queijos";
				break;
			case 2:
				this.pao = "Parmesão e orégano";
				break;
			case 3:
				this.pao = "9 grãos";
				break;
			case 4:
				this.pao = "Italiano Branco";
				break;
			case 5:
				this.pao = "Granola Salgada";
				break;
			case 6:
				this.pao = "Manteiga Temperada";
				break;
			default:
				console.log("Opção inválida");
				this.setPao();
				break;
		}
	},
	setProteina() {
		console.log(`
		1 - Peixe
		2 - Carne
		3 - Frango
		4 - Sem proteina
		`);
		const opcao = Number(prompt(`escolha o tipo de proteina: `));
		switch (opcao) {
			case 1:
				this.proteina = "Peixe";
				break;
			case 2:
				this.proteina = "Carne";
				break;
			case 3:
				this.proteina = "Frango";
				break;
			case 4:
				this.proteina = "Sem proteina";
				break;
			default:
				console.log("Opção inválida");
				this.setProteina();
				break;
		}
	},
	setAdicional() {
		console.log(`
		1 - Bacon
		2 - Calabresa
		3 - Crótons
		4 - Sem adicionais
		`);

		const opcao = Number(prompt(`escolha os adicionais: `));
		switch (opcao) {
			case 1:
				this.adicional = "Bacon";
				break;
			case 2:
				this.adicional = "Calabresa";
				break;
			case 3:
				this.adicional = "Crótons";
				break;
			case 4:
				this.adicional = "Sem adicionais";
				break;
			default:
				console.log("Opção inválida");
				this.setAdicional();
				break;
		}
	},
	setQueijo() {
		console.log(`
		1 - Cheddar
		2 - Suíço
		3 - Queijo Mussarela Ralada
		4 - Sem queijo
		`);
		const opcao = Number(prompt(`escolha o tipo de queijo: `));
		switch (opcao) {
			case 1:
				this.queijo = "Cheddar";
				break;
			case 2:
				this.queijo = "Suíço";
				break;
			case 3:
				this.queijo = "Queijo Mussarela Ralada";
				break;
			case 4:
				this.queijo = "Sem queijo";
				break;
			default:
				console.log("Opção inválida");
				this.setQueijo();
				break;
		}
	},
	setVegetal() {
		console.log(`
		1 - Azeitonas
		2 - Picles
		3 - Pepinos
		4 - Pimentão
		5 - Alface
		6 - Cebola Roxa
		7 - Tomate
		8 - Rúcula
		9 - Cenoura Ralada
		10 - Vinagrete
		11 - Sem vegetais
		`);
		const opcao = Number(prompt(`escolha os vegetais: `));
		switch (opcao) {
			case 1:
				this.vegetal = "Azeitonas";
				break;
			case 2:
				this.vegetal = "Picles";
				break;
			case 3:
				this.vegetal = "Pepinos";
				break;
			case 4:
				this.vegetal = "Pimentão";
				break;
			case 5:
				this.vegetal = "Alface";
				break;
			case 6:
				this.vegetal = "Cebola Roxa";
				break;
			case 7:
				this.vegetal = "Tomate";
				break;
			case 8:
				this.vegetal = "Rúcula";
				break;
			case 9:
				this.vegetal = "Cenoura Ralada";
				break;
			case 10:
				this.vegetal = "Vinagrete";
				break;
			case 11:
				this.vegetal = "Sem vegetais";
				break;
			default:
				console.log("Opção inválida");
				this.setVegetal();
				break;
		}
	},
	setMolho() {
		console.log(`
		1 - Cebola Agridoce
		2 - Chipotle(Picante)
		3 - Barbecue
		4 - Parmesão
		5 - Maionese Temperada
		6 - Mostarda e Mel
		7 - Supreme
		8 - Sem molho
		`);
		const opcao = Number(prompt(`escolha o molho: `));
		switch (opcao) {
			case 1:
				this.molho = "Cebola Agridoce";
				break;
			case 2:
				this.molho = "Chipotle";
				break;
			case 3:
				this.molho = "Barbecue";
				break;
			case 4:
				this.molho = "Parmesão";
				break;
			case 5:
				this.molho = "Maionese Temperada";
				break;
			case 6:
				this.molho = "Mostarda e Mel";
				break;
			case 7:
				this.molho = "Supreme";
				break;
			case 8:
				this.molho = "Sem molho";
				break;
			default:
				console.log("Opção inválida");
				this.setMolho();
				break;
		}
	},
	setVoucher() {
		console.log(`
		1 - 5%
		2 - 10%
		3 - 25%
		4 - Não tenho	
		`);
		const opcao = Number(prompt(`escolha o voucher: `));
		switch (opcao) {
			case 1:
				this.voucher = 0.95;
				break;
			case 2:
				this.voucher = 0.9;
				break;
			case 3:
				this.voucher = 0.75;
				break;
			case 4:
				this.voucher = 1;
				break;
			default:
				console.log("Opção inválida");
				this.setVoucher();
				break;
		}
	},

	calcularPreco() {
		this.precoFinal = 0;
		switch (this.pao) {
			case "3 Queijos":
				this.precoFinal += 5.5 * this.qntPao;
				break;
			case "Parmesão e orégano":
				this.precoFinal += 4.5 * this.qntPao;
				break;
			case "9 grãos":
				this.precoFinal += 6 * this.qntPao;
				break;
			case "Italiano Branco":
				this.precoFinal += 3 * this.qntPao;
				break;
			case "Granola Salgada":
				this.precoFinal += 4.25 * this.qntPao;
				break;
			case "Manteiga Temperada":
				this.precoFinal += 3.75 * this.qntPao;
				break;
			default:
				break;
		}

		switch (this.proteina) {
			case "Peixe":
				this.precoFinal += 4.75 * this.qntProteina;
				break;
			case "Carne":
				this.precoFinal += 3.25 * this.qntProteina;
				break;
			case "Frango":
				this.precoFinal += 1.75 * this.qntProteina;
				break;
			case "Sem proteina":
				this.precoFinal += 0 * this.qntProteina;
			default:
				break;
		}

		switch (this.adicional) {
			case "Bacon":
				this.precoFinal += 3.5 * this.qntAdicional;
				break;
			case "Calabresa":
				this.precoFinal += 2.25 * this.qntAdicional;
				break;
			case "Crótons":
				this.precoFinal += 0.75 * this.qntAdicional;
				break;
			case "Sem adicionais":
				this.precoFinal += 0 * this.qntAdicional;
			default:
				break;
		}

		switch (this.queijo) {
			case "Cheddar":
				this.precoFinal += 1 * this.qntQueijo;
				break;
			case "Suíço":
				this.precoFinal += 1.25 * this.qntQueijo;
				break;
			case "Queijo Mussarela Ralada":
				this.precoFinal += 0.75 * this.qntQueijo;
				break;
			case "Sem queijo":
				this.precoFinal += 0 * this.qntQueijo;
			default:
				break;
		}

		switch (this.vegetal) {
			case "Azeitonas":
				this.precoFinal += 0.3 * this.qntVegetal;
				break;
			case "Picles":
				this.precoFinal += 0.4 * this.qntVegetal;
				break;
			case "Pepinos":
				this.precoFinal += 0.1 * this.qntVegetal;
				break;
			case "Pimentão":
				this.precoFinal += 0.75 * this.qntVegetal;
				break;
			case "Alface":
				this.precoFinal += 0.2 * this.qntVegetal;
				break;
			case "Cebola Roxa":
				this.precoFinal += 0.15 * this.qntVegetal;
				break;
			case "Tomate":
				this.precoFinal += 0.2 * this.qntVegetal;
				break;
			case "Rúcula":
				this.precoFinal += 0.45 * this.qntVegetal;
				break;
			case "Cenoura Ralada":
				this.precoFinal += 0.55 * this.qntVegetal;
				break;
			case "Vinagrete":
				this.precoFinal += 0.45 * this.qntVegetal;
				break;
			case "Sem vegetais":
				this.precoFinal += 0 * this.qntVegetal;
				break;
			default:
				break;
		}

		switch (this.molho) {
			case "Cebola Agridoce":
				this.precoFinal += 1.45 * this.qntMolho;
				break;
			case "Chipotle":
				this.precoFinal += 2 * this.qntMolho;
				break;
			case "Barbecue":
				this.precoFinal += 1.95 * this.qntMolho;
				break;
			case "Parmesão":
				this.precoFinal += 1.45 * this.qntMolho;
				break;
			case "Maionese Temperada":
				this.precoFinal += 1.75 * this.qntMolho;
				break;
			case "Mostarda e Mel":
				this.precoFinal += 2.15 * this.qntMolho;
				break;
			case "Supreme":
				this.precoFinal += 3 * this.qntMolho;
				break;
			case "Sem molhos":
				this.precoFinal += 0 * this.qntMolho;
				break;
			default:
				break;
		}

		if (this.tamanho == "duplo") {
			this.precoFinal = this.precoFinal * 1.75;
		}

		if (this.aniversario == true) {
			this.precoFinal = this.precoFinal * 0.9;
		}
		if (this.viajem == true) {
			this.precoFinal += 1;
		}
		this.precoFinal = this.precoFinal * this.voucher;

		return this.precoFinal;
	},
};

sanduiche.setPao();
console.clear();
sanduiche.setProteina();
console.clear();
sanduiche.setAdicional();
console.clear();
sanduiche.setQueijo();
console.clear();
sanduiche.setVegetal();
console.clear();
sanduiche.setMolho();
console.clear();

if (prompt("deseja dobrar algum ingredientes? (s/n)") == "s") {
	console.clear();
	if (prompt("deseja dobrar a Proteina? (s/n) ") == "s") {
		sanduiche.qntProteina = 2;
	}
	console.clear();
	if (prompt("deseja dobrar o Adicional (s/n) ") == "s") {
		sanduiche.qntAdicional = 2;
	}
	console.clear();
	if (prompt("deseja dobrar o Queijo (s/n) ") == "s") {
		sanduiche.qntQueijo = 2;
	}
	console.clear();
	if (prompt("deseja dobrar o Vegetal (s/n) ") == "s") {
		sanduiche.qntVegetal = 2;
	}
	console.clear();
	if (prompt("deseja dobrar o Molho (s/n) ") == "s") {
		sanduiche.qntMolho = 2;
	}
	console.clear();
}

if (
	prompt(
		`deseja dobrar o tamanho do sanduiche por mais R$${(
			sanduiche.calcularPreco() * 0.75
		).toFixed(2)} (s/n) `
	) == "s"
) {
	sanduiche.tamanho = "duplo";
}
console.clear();
if (prompt("hoje é seu aniversário? (s/n)") == "s") {
	sanduiche.aniversario = true;
}
console.clear();
if (prompt("é para viajem? (s/n)") == "s") {
	sanduiche.viajem = true;
}
console.clear();

sanduiche.setVoucher();
console.clear();

console.log(`
Seu pedido:


Pão       : ${sanduiche.pao}	
Proteina  : ${sanduiche.proteina},			quantidade: ${sanduiche.qntProteina}
Adicional : ${sanduiche.adicional},			quantidade: ${sanduiche.qntAdicional}
Queijo    : ${sanduiche.queijo},			quantidade: ${sanduiche.qntQueijo}
Vegetal   : ${sanduiche.vegetal},			quantidade: ${sanduiche.qntVegetal}
Molho     : ${sanduiche.molho},			quantidade: ${sanduiche.qntMolho}
Tamanho   : ${sanduiche.tamanho}
Voucher   : ${100 - 100 * sanduiche.voucher}% de desconto
${
	sanduiche.aniversario
		? "é seu aniversário você ganha 10% de desconto"
		: "não é seu aniversário"
}
${sanduiche.viajem ? "Para Viajem" : "não é para viajem"}

O preço total do seu sanduiche é: R$${sanduiche.calcularPreco().toFixed(2)}`);
