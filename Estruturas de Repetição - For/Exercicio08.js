// 08 – Escreva um algoritmo que determina o fatorial de um número. Para isso, peça para que o usuário
// digite um número. Se o número digitado for 0, seu fatorial é 1. Não serão admitidos números negativos.
// O fatorial (N!) de um número é definido conforme o exemplo a seguir:
const prompt = require("prompt-sync")();

let n = Number(prompt("Digite o valor de N: "));

if (n == 0) {
  console.log(`O fatorial de ${n} é 1`);
} else {
  let fatorial = 1;
  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${n} é ${fatorial}`);
}

