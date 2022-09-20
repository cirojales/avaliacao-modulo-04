/*

4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.

*/

function intervalos(...nums) {
  let de0a25 = 0, de26a50 = 0, de51a75 = 0, de76a100 = 0;

  for (let num of nums) {
    if (num < 0) {
      break;
    } else if (num >= 0 && num <= 25) {
      de0a25++;
    } else if (num >= 26 && num <= 50) {
      de26a50++;
    } else if (num >= 51 && num <= 75) {
      de51a75++;
    } else if (num >= 76 && num <= 100) {
      de76a100++;
    }
  }

  let contagem = (num) => {
    if (num > 1) return num + " números";
    else if (num === 1) return num + " número";
    else return "nenhum";
  };

  console.log(
    `[0-25]: ${contagem(de0a25)}` + "\n" +
    `[26-50]: ${contagem(de26a50)}` + "\n" +
    `[51-75]: ${contagem(de51a75)}` + "\n" +
    `[76-100]: ${contagem(de76a100)}`
  );
}

intervalos(7, 26, 27, 51, 52, 53, 90, 91, 92, 93);