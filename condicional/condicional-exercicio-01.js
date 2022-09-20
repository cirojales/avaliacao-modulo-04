/*

1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

*/

function menorQue(a, b, c) {
  if (a + b < c) {
    console.log(`${a} + ${b} é menor que ${c}.`);
  } else {
    console.log(`${a} + ${b} não é menor que ${c}.`);
  }
}

menorQue(1, 1, 3);
menorQue(2, 1, 3);
menorQue(3, 1, 3);
