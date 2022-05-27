//02 – Faça um algoritmo que leia dois números, maiores que zero e menores que 11. Os dois números lidos
//precisam ser diferentes. Uma vez tendo feito a leitura desses números, utilizando a instrução Para, mostre
//os números entre 1 e 1000 que sejam múltiplos tanto do primeiro número lido quanto do segundo.
const promp = require("prompt-sync")();

let sumPos = 0;
let sumNeg = 0;
let sum = 0;
for (let i = 0; i < 10; i++) {
  let num = promp("");

  if (num < 0) {
    sumNeg += num;
  } else {
    sumPos += num;
  }
  sum += num;
}

console.log(`
soma dos número negativos: ${sumNeg}
soma dos números positivos: ${sumPos}
soma geral dos números ${sum}
`);