//05 – Duas empresas foram contatadas para desenvolver um programa responsável por converter graus
//Celsius em graus Fapiais. Nesse primeiro momento, o escopo do programa foi explicado a cada uma delas a
//fim de obter um orçamento aproximado de quanto cada uma cobraria.
// A empresa “softwareArt” disse que levaria 6 meses para desenvolver o programa e cobraria 5 mil
// dinheiros.
// A empresa “furiousCoding” disse que também levaria 6 meses para desenvolver o programa e cobraria 2
// dinheiros no primeiro mês, no segundo o dobro do que foi pago no mês anterior multiplicado por 2
// (Equivalente a favereiro. Em março multiplica-se por 3, em Abril por 4...), e assim sucessivamente.
// (Lembrando que o desenvolvimento começaria em Janeiro e terminaria dia 30 de Junho).
// Após a gerência da FAPI realizar os cálculos, qual empresa seria mais barato contratar?
// Qual a diferença de valores entre as empresas?

lastMonth = 1;
for (let i = 1; i <= 6; i++) {
	let totalPrice = lastMonth * 2 * i;
	lastMonth = totalPrice;
}
console.log(lastMonth);
