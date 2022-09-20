/*

8) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.A. contendo 10 valores.

*/

function progrAritmetica(valorInicial, razao) {
  let sequencia = [];
  let valorAtual = valorInicial;
  for (let i = 0; i < 10; i++) {
    sequencia.push(valorAtual);
    valorAtual += razao;
  }
  console.log(sequencia);
}

progrAritmetica(1, 2);