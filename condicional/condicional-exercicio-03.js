/*

3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

*/

function parOuImpar(num) {
  if (num % 2 === 0) {
    console.log(`${num} é par`);
  } else {
    console.log(`${num} é ímpar`);
  }
}

parOuImpar(12);
parOuImpar(77);