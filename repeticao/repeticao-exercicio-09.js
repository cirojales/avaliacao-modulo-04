/*

9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em P.G. contendo 10 valores.

*/

function progrGeometrica(valorInicial, razao) {
  let sequencia = [];
  let valorAtual = valorInicial;
  for (let i = 0; i < 10; i++) {
    sequencia.push(valorAtual);
    valorAtual *= razao;
  }
  console.log(sequencia);
}

progrGeometrica(2, 2);