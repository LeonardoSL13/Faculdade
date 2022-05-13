//08 – Faça um algoritmo que leia o nome o peso e a idade de uma pessoa. Garanta que o peso e a idade
//sejam maiores do que 30 quilos e 18 anos, respectivamente. Enquanto algum dado estiver incorreto,
//mostre qual dos dados está incorreto (se altura, peso ou ambos) e peça novamente para que os dados
//sejam digitados.

const prompt = require('prompt-sync')();

let peso = 1;
let idade = 1;

while (peso < 30 || idade < 18) {
  peso = parseFloat(prompt('Digite o seu peso: '));
  idade = parseFloat(prompt('Digite a sua idade: '));

  if (peso < 30) {
    console.log('Peso inválido');
  }
  if (idade < 18) {
    console.log('Idade inválida');
  }
}