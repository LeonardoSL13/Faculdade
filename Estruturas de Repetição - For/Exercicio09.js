// 09 – Sem utilizar a operação de multiplicação, leia dois números, o primeiro é o multiplicando e o segundo
// é o multiplicador. Ao final, exiba o resultado.
// Ex: 3x9 = 27
// Onde:
// 3 = multiplicando.
// 9 = Multiplicador)

const prompt = require("prompt-sync")();

let multiplicando = Number(prompt("Digite o valor do multiplicando: "));
let multiplicador = Number(prompt("Digite o valor do multiplicador: "));
let resultado = 0;

for (let i = 1; i <= multiplicador; i++) {
  resultado += multiplicando;
}

console.log(`${multiplicando} x ${multiplicador} = ${resultado}`);