/*

4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.

*/

function somarOuMultiplicar(valorA, valorB) {
  let valorC = 0;
  if (valorA === valorB) {
    valorC = valorA + valorB;
  } else {
    valorC = valorA * valorB;
  }
  console.log(valorC);
}

somarOuMultiplicar(3, 3);
somarOuMultiplicar(4, 3);