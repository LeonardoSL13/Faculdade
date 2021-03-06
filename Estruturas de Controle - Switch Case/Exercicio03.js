// 3 – Durante campeonatos esportivos de diversas modalidades, os organizadores dividem os competidores
// por faixa etária, o que define sua categoria. Com base na tabela abaixo crie um algoritmo que, com base na
// categoria informada pelo usuário, retorne qual a faixa etária permitida para os atletas daquela categoria.
// Lembre-se que não é permitido competidores com menos de 7 anos e com mais de 40. Caso a categoria
// informada não exista, mostre uma mensagem que indique quais são as categorias possíveis.

const prompt = require("prompt-sync")();

let categoria = prompt("Digite a categoria(Infantil, Juvenil, Junior, Profissional, Master, Senior): ");

switch (categoria.toUpperCase()) {
  case "INFANTIL":
    console.log("Faixa etária permitida: 7 a 11 anos");
    break;
  case "JUVENIL":
    console.log("Faixa etária permitida: 12 a 14 anos");
    break;
  case "JUNIOR":
    console.log("Faixa etária permitida: 15 a 20 anos");
    break;
  case "PROFISSIONAL":
    console.log("Faixa etária permitida: 21 a 30 anos");
    break;
  case "MASTER":
    console.log("Faixa etária permitida: 31 a 35 anos");
    break;
  case "SENIOR":
    console.log("Faixa etária permitida: 36 a 40 anos");
    break;
  default:
    console.log("Categoria inválida. Por favor, digite uma categoria válida.( Infantil, Juvenil, Junior, Profissional, Master, Senior)");
    break;
}