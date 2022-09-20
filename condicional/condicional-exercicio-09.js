/*

9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: 

● para homens: (72.7 * h) – 58; 
● para mulheres: (62.1 * h) – 44.7;

*/

function pesoIdeal(altura, sexo) {
  let pesoIdeal = 0;
  if (sexo === "masculino") {
    pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "feminino") {
    pesoIdeal = 62.1 * altura - 44.7;
  }
  console.log(`Peso ideal: ${Number(pesoIdeal.toFixed(1))} kg`) // uma casa decimal; elimina zero
}

pesoIdeal(1.7, "masculino");
pesoIdeal(1.7, "feminino");