/*

7) Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N.

*/

function criarTabuada(num) {
  let tabuada = "";
  for (let i = 0; i <= 10; i++) {
    tabuada += `${i} X ${num} = ${i * num}`;
    if (i < 10) {
      tabuada += "\n";
    }
  }
  console.log(tabuada);
}

criarTabuada(3);