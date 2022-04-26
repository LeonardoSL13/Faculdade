//1 – Crie um algoritmo que mostre quais são as opções de pagamento e peça para o usuário digitar o código
//da sua opção de pagamento, quando uma opção for selecionada, mostrar a condição.

const prompt = require("prompt-sync")();

console.log(`
              1 - venda a vista no dinheiro
              2 - venda a vista no cartão de debito
              3 - 1x no cartão de credito
              4 - 3x no cartão de credito
              5 - 6x no cartão de credito`);


let opcao = parseInt(prompt("Digite o código da opção de pagamento: "));

switch (opcao) {
  case 1:
    console.log("Desconto de 12%");
    break;
  case 2:
    console.log("Desconto de 3%");
    break;
  case 3:
    console.log("Mesmo Preço");
    break;
  case 4:
    console.log("Acréscimo de 5%");
    break;
  case 5:
    console.log("Acréscimo de 10%");
    break;
  default:
    console.log("Opção inválida.");
    break;
}