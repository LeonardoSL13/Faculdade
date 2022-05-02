// 5 – Crie um algoritmo que leia três números inteiros e, seguindo a tabela abaixo, exiba um menu na tela
// para que o usuário possa digitar a opção desejada. Leia a opção digitada pelo usuário.
// Os números devem ser apresentados ao usuário conforme a regra acima escolhida.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));
let num3 = parseInt(prompt("Digite o terceiro número: "));

console.log(`
                1 - orderm crescente
                2 - ordem decrescente
                3 - ordem inserida
                4 - ordem inversa da inserida`);

let opcao = parseInt(prompt("Digite o código da operação: "));

switch (opcao) {
  case 1:
    if (num1 <= num2 && num1 <= num3) {
      if (num2 <= num3) {
        console.log(`${num1}, ${num2}, ${num3}`);
      } else {
        console.log(`${num1}, ${num3}, ${num2}`);
      }
    } else if (num2 <= num1 && num2 <= num3) {
      if (num1 <= num3) {
        console.log(`${num2}, ${num1}, ${num3}`);
      } else {
        console.log(`${num2}, ${num3}, ${num1}`);
      }
    } else {
      if (num1 <= num2) {
        console.log(`${num3}, ${num1}, ${num2}`);
      } else {
        console.log(`${num3}, ${num2}, ${num1}`);
      }
    }
    break;
  case 2:
    if (num1 >= num2 && num1 >= num3) {
      if (num2 >= num3) {
        console.log(`${num1}, ${num2}, ${num3}`);
      } else {
        console.log(`${num1}, ${num3}, ${num2}`);
      }
    }
    else if (num2 >= num1 && num2 >= num3) {
      if (num1 >= num3) {
        console.log(`${num2}, ${num1}, ${num3}`);
      } else {
        console.log(`${num2}, ${num3}, ${num1}`);
      }
    }
    else {
      if (num1 >= num2) {
        console.log(`${num3}, ${num1}, ${num2}`);
      } else {
        console.log(`${num3}, ${num2}, ${num1}`);
      }
    }
    break;
  case 3:
    console.log(`${num1}, ${num2}, ${num3}`);
    break;
  case 4:
    console.log(`${num3}, ${num2}, ${num1}`);
    break;
  default:
    console.log("Opção inválida.");
    break;
}