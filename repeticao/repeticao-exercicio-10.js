/*

10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

*/

function fatorial(num) {
  let equacao = "";
  let resultado = 1;
  for (let i = num; i >= 1; i--) {
    resultado *= i;
    if (i === num) {
      equacao += `${num}! = ${num} X `;
    } else if (i !== 1) {
      equacao += `${i} X `;
    } else {
      equacao += `${i} = ${resultado}`;
    }
  }
  console.log(equacao);
}

fatorial(5);
