/*

6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

*/

function impares() {
  let arr = [];
  for (let i = 101; i < 200; i++) {
    if (i % 2 !== 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

impares();