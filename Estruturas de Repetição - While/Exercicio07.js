//07 – Faça um algoritmo que leia um conjunto de números (quantia a sua escolha) e mostre o maior dentre
//os números lidos. A condição de parada é que o número lido seja 0.
const prompt = require('prompt-sync')();

let i = 1;
let maior = 0;

while (i != 0) {
  i = parseFloat(prompt('Digite um número(digite "0" para sair): '));
  if (i > maior) {
    maior = i;
  }

}

console.log(`o maior é : ${maior}`);