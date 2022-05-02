const prompt = require('prompt-sync')();

const salarioBruto = parseFloat(prompt('Digite o seu salário mensal(Bruto): '));
let inss = 0;
let imposto = 0;
let desconto = 0;
let salario = salarioBruto;

if (salarioBruto <= 1212.00) {
  inss = salario * 0.075;
} else if (salarioBruto <= 2427.35) {

  inss = 1212.00 * 0.075;
  salario = salario - 1212.00;
  inss += salario * 0.9;

} else if (salarioBruto <= 3641.03) {
  inss = 1212.00 * 0.075;
  salario -= 1212.00;
  inss += 1215.34 * 0.09;
  salario -= 1215.34;
  inss += salario * 0.12;

} else if (salarioBruto <= 7087.22) {
  inss = 1212.00 * 0.075;
  salario -= 1212.00;
  inss += 1215.34 * 0.09;
  salario -= 1215.34;
  inss += 3446.18 * 0.12;
  salario -= 3446.18;
  inss = salario * 0.14;
} else {
  inss = 1417.44;
}


if (salarioBruto - inss <= 1903.98) {
  desconto = 0;
} else if (salarioBruto - inss <= 2826.65) {
  imposto = (salarioBruto - inss) * 0.075;
  desconto = (imposto - 149.94);
} else if (salarioBruto - inss <= 3751.05) {
  imposto = (salarioBruto - inss) * 0.15;
  desconto = (imposto - 372.54);
} else if (salarioBruto - inss <= 4664.68) {
  imposto = (salarioBruto - inss) * 0.225;
  desconto = (imposto - 667.93);
} else {
  imposto = (salarioBruto - inss) * 0.275;
  desconto = (imposto - 912.83);
}


salario = salarioBruto.toFixed(2) - inss.toFixed(2) - desconto.toFixed(2);
console.log(`desconto do imposto de renda: ${desconto.toFixed(2)}, imposto: ${imposto.toFixed(2)}, inss: ${inss.toFixed(2)}, salário líquido: ${salario.toFixed(2)}`);
