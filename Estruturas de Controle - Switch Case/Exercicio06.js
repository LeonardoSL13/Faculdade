// 6 – Crie um algoritmo que determinara, com base na leitura do código que representa o mês, em qual
// estação estamos. Então exiba para o usuário qual a estação. Para isso, veja a tabela abaixo:

const prompt = require("prompt-sync")();

console.log(`
                 1 - Janeiro
                 2 - Fevereiro
                 3 - Março
                 4 - Abril
                 5 - Maio
                 6 - Junho
                 7 - Julho
                 8 - Agosto
                 9 - Setembro
                 10 - Outubro
                 11 - Novembro
                 12 - Dezembro
                 `);

let mes = parseInt(prompt("Digite o código do mês: "));

switch (mes) {
  case 1:
    console.log("verão");
    break;
  case 2:
    console.log("verão");
    break;
  case 3:
    console.log("verão");
    break;
  case 4:
    console.log("outono");
    break;
  case 5:
    console.log("outono");
    break;
  case 6:
    console.log("outono");
    break;
  case 7:
    console.log("inverno");
    break;
  case 8:
    console.log("inverno");
    break;
  case 9:
    console.log("inverno");
    break;
  case 10:
    console.log("primavera");
    break;
  case 11:
    console.log("primavera");
    break;
  case 12:
    console.log("primavera");
    break;
  default:
    console.log("Código inválido");
    break;
}

