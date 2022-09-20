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
  console.log(
    `Sexo: ${sexo}` + "\n" +
    `Altura: ${altura.toFixed(2)}` + "\n" + // duas casas decimais; mantém o zero
    `Peso ideal: ${Number(pesoIdeal.toFixed(1))} kg` // uma casa decimal; elimina o zero
  ); 
}

pesoIdeal(1.70, "masculino");
// pesoIdeal(1.70, "feminino");