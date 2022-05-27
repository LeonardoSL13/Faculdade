//10 – Utilizando a estrutura Para, faca um algoritmo que faca o seguinte desenho 5 vezes:

for (let i = 0; i < 5; i++) {
  let desenho = "";
  for (let i = 0; i < 5; i++) {
    desenho = desenho + "-";
    console.log(desenho);
  }
  for (let i = 1; i < 5; i++) {
    console.log(desenho.slice(i));
  }
}