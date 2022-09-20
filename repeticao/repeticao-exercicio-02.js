/* 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar: 

a. A menor altura do grupo; 
b. A maior altura do grupo; */

/* Apliquei o algoritmo de bubble sort: cada elemento é comparado ao elemento seguinte. Se aquele é maior que este, permutam-se os elementos via desestruturação. Ordenado o array, basta acessar o primeiro e o último elemento. */

function mostrarAlturas(...alturas) {
  for (let i = 0; i < alturas.length; i++) {
    for (let j = 0; j < alturas.length; j++) {
      if (alturas[j] > alturas[j + 1]) {
        [alturas[j], alturas[j + 1]] = [alturas[j + 1], alturas[j]];
      }
    }
  }
  console.log(
    `Menor altura: ${alturas[0]}` + "\n" + 
    `Maior altura: ${alturas.at(-1)}` // ES2022; adeus, "array[array.length - 1]"
  );
}

mostrarAlturas(
  1.64,
  1.83,
  1.91,
  1.59,
  1.51,
  1.71,
  1.53,
  1.73,
  1.79,
  1.79,
  1.63,
  1.88,
  1.83,
  1.92,
  1.78
);
