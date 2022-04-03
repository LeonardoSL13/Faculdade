const {
    ler,
    escrever
} = require('./utils/utils');

//Exemplo de utilizacao das funcoes de leitura e escrita de valores
let letra = ler("Digite uma letra: ");
escrever(letra);

let numero = ler("Digite um numero: ");
let valorNumerico = Number(numero);
escrever(valorNumerico + valorNumerico);