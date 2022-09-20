/*

6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

*/

function booleanos(valor1, valor2) {
  if (valor1 && valor2) {
    console.log("Ambos são VERDADEIROS.");
  } else if (!valor1 && !valor2) {
    console.log("Ambos são FALSOS.");
  }
}

booleanos(true, true);
booleanos(false, false);