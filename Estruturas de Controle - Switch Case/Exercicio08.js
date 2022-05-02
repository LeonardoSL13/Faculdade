const prompt = require('prompt-sync')();

let letra = prompt('Digite uma letra: ');


switch (letra.toUpperCase()) {
  case 'A': case 'E': case 'I': case 'O': case 'U':
    console.log('É uma vogal');
    break;
  default:
    console.log('Não é uma vogal');
    break;
}