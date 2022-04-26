// 2 – Faça um programa que receba dois números inteiros e positivos (ou 0). De acordo com a tabela abaixo,
// leia qual o código da operação que deseja ser efetuada e mostre o resultado. Lembre-se: No caso da
// divisão, caso o segundo número seja 0, deve exibir a mensagem: “Não é possível dividir por 0”.

const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Digite o primeiro número: "));
let num2 = parseInt(prompt("Digite o segundo número: "));

console.log(`
              1 - Soma
              2 - Subtração
              3 - Multiplicação
              4 - Divisão`);

let opcao = parseInt(prompt("Digite o código da operação: "));

switch (opcao) {
  case 1:
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 2:
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case 3:
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case 4:
    if (num2 == 0) {
      console.log("Não é possível dividir por 0");
    } else {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
  default:
    console.log("Opção inválida.");
    break;
}
