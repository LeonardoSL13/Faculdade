//09 – Faça um algoritmo que leia o N nomes de funcionários de uma empresa e seus salários e calcule a
//média dos salários (Quantia de dados de entrada a sua escolha). A condição de parada é que o nome seja
//“FINALIZA”.

const prompt = require("prompt-sync")();

let salarios = [];

while (true) {
  let nome = prompt('Digite o nome do funcionário (escreva "FINALIZA" para parar): ');
  if (nome.toUpperCase == "FINALIZA") {
    break;
  }
  let salario = prompt("Digite o salário do funcionário: ");
  salarios.push(salario);
}

let i = 0;
let soma = 0;

while (i < salarios.length) {
  soma += parseFloat(salarios[i]);
  i++;
}

console.log(`A média dos salários é: ${soma / salarios.length}`);
