/*

3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

*/


function lerNumeros(...nums) {
  let soma = 0;
  let qtdPositivos = 0;
  let qtdNegativos = 0;

  for (let num of nums) {
    soma += num;
    if (num > 0) {
      qtdPositivos++;
    } else if (num < 0) {
      qtdNegativos++;
    }
  }
  
  console.log(
    `Média aritmética: ${soma / nums.length}` + "\n" +
    `Quantidade de positivos: ${qtdPositivos}` + "\n" +
    `Quantidade de negativos: ${qtdNegativos}` + "\n" +
    `% de positivos: ${qtdPositivos / nums.length * 100}%` + "\n" +
    `% de negativos: ${qtdNegativos / nums.length * 100}%`
  );
}

lerNumeros(7, 2, 8, 4, 1, -1, -2, -3, -2, -1);