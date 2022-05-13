//06 – Faça um algoritmo que leia um conjunto de números (quantia a sua escolha), mostre a soma deles. A
//condição de parada é que o número lido seja 0.
const prompt = require('prompt-sync')();

let i = 1;
let soma = 0;

while (i != 0) {
  i = parseInt(prompt('Digite um número(digite "0" para sair): '));
  soma += i;
}

console.log(soma);