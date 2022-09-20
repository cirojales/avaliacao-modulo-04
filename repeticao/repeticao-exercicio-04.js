/*

4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve terminar quando for lido um número negativo.

*/

function intervalos(...nums) {
  let de0a25 = 0, de26a50 = 0, de51a75 = 0, de76a100 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      break;
    }

    if (nums[i] >= 0 && nums[i] <= 25) {
      de0a25++;
    } else if (nums[i] >= 26 && nums[i] <= 50) {
      de26a50++;
    } else if (nums[i] >= 51 && nums[i] <= 75) {
      de51a75++;
    } else if (nums[i] >= 76 && nums[i] <= 100) {
      de76a100++;
    }
  }

  console.log(
    `[0-25]: ${de0a25}` + "\n" + 
    `[26-50]: ${de26a50}` + "\n" + 
    `[51-75]: ${de51a75}` + "\n" +  
    `[76-100]: ${de76a100}`
  );
}

intervalos(1, 26, 27, 51, 52, 53, 90, 91, 92, 93);