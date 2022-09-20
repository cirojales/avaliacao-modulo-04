/*

6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

*/

function booleanos(valor1, valor2) {
  if (valor1 && valor2) {
    console.log("Ambos são verdadeiros");
  } else if (!valor1 && !valor2) {
    console.log("Ambos são falsos");
  }
}

booleanos(true, true);
booleanos(false, false);