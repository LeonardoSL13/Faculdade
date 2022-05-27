// 06 – Escreva um programa que calcule a tabuada dos números de 1 até 15 (multiplicando) onde o
// multiplicador final para cada um deles é 10.

for (let i = 1; i <= 15; i++) {
  for (let f = 1; f <= 10; f++) {
    console.log(`${i} X ${f} = ${i * f}`);
  }
}