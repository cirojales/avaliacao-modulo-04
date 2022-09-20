/*

5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será zero.

*/

function lerNumeros(...nums) {
  let qtdPares = 0;
  let qtdImpares = 0;
  let somaPares = 0;
  let somaLidos = 0;

  for (let num of nums) {
    if (num === 0) {
      break;
    }

    somaLidos += num;
    if (num % 2 === 0) {
      qtdPares++;
      somaPares += num;
    } else {
      qtdImpares++;
    }
  }

  console.log(
    `Quantidade de pares: ${qtdPares}` + "\n" +
    `Quantidade de ímpares: ${qtdImpares}` + "\n" +
    `Média de valores pares: ${somaPares / qtdPares}` + "\n" +
    `Média de valores lidos: ${somaLidos / nums.length}`
  );
}

lerNumeros(2, 4, 6, 1, 1, 1);
