/*

1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.

*/

function somarMultiplosVersao1() {
  let soma = 0;
  for (let i = 1; i <= 500; i++) {
    if (i % 3 === 0 && i % 2 !== 0) {
      soma += i;
    }
  }
  console.log(`Resultado: ${soma}`);
}

somarMultiplosVersao1();

// abaixo, solução alternativa, segundo a interpretação que o prof. Alessandro dá à questão.

function somarMultiplosVersao2(...nums) {
  let soma = 0;
  for (let num of nums) {
    if (
      num % 2 !== 0 
      && num % 3 === 0 
      && num >= 1 
      && num <= 500
    ) {
      soma += num;
    }
  }
  console.log(`Resultado: ${soma}`);
}

// somarMultiplosVersao2(3, 9, 11, 12, 4, -9, -12);