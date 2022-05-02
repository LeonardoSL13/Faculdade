const prompt = require('prompt-sync')();

let num1 = Number(prompt('Digite um número de 1 a 10: '));

switch (num1) {
  case 1: case 3: case 5: case 7: case 9:
    console.log('O número é ímpar');
    break;
  case 2: case 4: case 6: case 8: case 10:
    console.log('O número é par');
    break;
  default:
    console.log('Número inválido');
    break;
}