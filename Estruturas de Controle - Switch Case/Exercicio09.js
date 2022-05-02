const prompt = require('prompt-sync')();

let siglaEstado = prompt('Digite a sigla do estado: ');

switch (siglaEstado.toUpperCase()) {
  case "DF": case "GO": case "MT": case "MS":
    console.log("Região centro-oeste");
    break;
  case "AL": case "BA": case "CE": case "MA": case "PB": case "PE": case "PI": case "RN": case "SE":
    console.log("Região nordeste");
    break;
  case "AC": case "AM": case "AP": case "PA": case "RO": case "RR": case "TO":
    console.log("Região norte");
    break;
  case "ES": case "MG": case "RJ": case "SP":
    console.log("Região sudeste");
    break;
  case "PR": case "SC": case "RS":
    console.log("Região sul");
    break;
  default:
    console.log("Estado inválido");
    break;
}