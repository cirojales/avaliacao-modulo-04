/* 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem decrescente. */

/* Apliquei o algoritmo de bubble sort: cada elemento é comparado ao elemento seguinte. Se aquele é menor que este, permutam-se os elementos via desestruturação. */

function ordemDescrescente(num1, num2, num3) {
  let nums = [...arguments]; // spreading do objeto arguments
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  console.log(nums);
}

ordemDescrescente(-12, 7777, 321);